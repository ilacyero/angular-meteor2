import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

const errors = new Mongo.Collection(null);
export const Errors = new MongoObservable.Collection<Error>(errors);

export interface Error {
  message: string;
}
