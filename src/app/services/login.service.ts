import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user: Login) {
    console.log(user);
    return this.http.post('http://localhost:8080/login', user, {observe: 'response'});
  }
}

