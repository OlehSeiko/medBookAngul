import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Laboratory} from '../models/Laboratory';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  constructor(private http: HttpClient) {
  }

  save(laboratory: Laboratory) {
    return this.http.post('http://localhost:8080/save/laboratory', laboratory, {responseType: 'text'});
  }

  laboratoryPotochuy() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    let headers = new HttpHeaders();

    headers = headers.append('Authorization', token);
    headers = headers.append('Role', role);

    return this.http.get('http://localhost:8080/laboratory/potochnuy', {headers});
  }
}
