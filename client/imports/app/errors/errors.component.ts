import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MeteorObservable } from 'meteor-rxjs';
import { Subscription } from 'rxjs/Subscription';

import template from './errors.component.html';
import { Errors, Error } from '../../../collections/errors.ts';

@Component({
  selector: 'errors-alert',
  template
})
export class ErrorComponent implements OnInit {
  // error: string;
  errors: Observable<Error[]>;
  autorunSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.autorunSub = MeteorObservable.autorun().zone().subscribe(() => {
      console.log('Errors total:', Errors.find({}).cursor.count());
      this.errors = Errors.find({}).zone();
    });
  }

  ngOnDestroy() {
    this.autorunSub.unsubscribe();
  }
  //
  // signup() {
  //   if (this.signupForm.valid) {
  //     Accounts.createUser({
  //       email: this.signupForm.value.email,
  //       password: this.signupForm.value.password
  //     }, (err) => {
  //       if (err) {
  //         this.zone.run(() => {
  //           this.error = err;
  //         });
  //       } else {
  //         this.router.navigate(['/']);
  //       }
  //     });
  //   }
  // }
}
