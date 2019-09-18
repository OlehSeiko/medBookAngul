import {Role} from './Role';

export class User {
  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public password?: string,
    public phone?: string,
    public role?: Role,
  ) {
  }

}
