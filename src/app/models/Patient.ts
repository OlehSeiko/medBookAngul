import {User} from './User';
import {Role} from './Role';

export class Patient extends User {
  constructor(
    public id?: number,
    public surname?: string,
    public name?: string,
    public fatherName?: string,
    public gender?: string,
    public image?: string,
    public username?: string,
    public password?: string,
    public phone?: string,
    public dataOfBirth?: string,
    public role?: Role
  ) {
    super(id, name, username, password, phone, role);
  }

}
