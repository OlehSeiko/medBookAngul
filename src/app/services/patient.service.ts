import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient
  ) {
  }

  save(patient: Patient) {
    return this.http.post('http://localhost:8080/save', patient);
  }
}
