import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctor} from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }

  save(doctor: Doctor) {
    return this.http.post('http://localhost:8080/save/doctor', doctor, {responseType: 'text'});
  }
}
