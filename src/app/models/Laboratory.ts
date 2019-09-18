import {User} from './User';
import {Role} from './Role';

export class Laboratory extends User {
  constructor(
    public id?: number,
    public name?: string,
    public region?: string,
    public district?: string,
    public city?: string,
    public street?: string,
    public numberOfBuild?: string,
    public username?: string,
    public password?: string,
    public phone?: string,
    public role?: Role
  ) {
    super(id, name, username, password, phone, role);
  }
}
