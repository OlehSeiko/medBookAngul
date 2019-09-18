import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
