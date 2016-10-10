import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MeteorObservable } from 'meteor-rxjs';
import { Subscription } from 'rxjs/Subscription';

import template from './error.component.html';
import { Errors, Error } from '../../../collections/errors.ts';

@Component({
  selector: 'error-alert',
  template
})
export class ErrorComponent implements OnInit {
  errors: Error;
  constructor() {
    console.log(arguments);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
