import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  save(user) {
    console.log('Service');
    this.http.post('http://localhost:8080/save', user).subscribe(value => {
      console.log(value);
    });
  }
}
