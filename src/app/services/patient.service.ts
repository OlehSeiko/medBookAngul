import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
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
    return this.http.post('http://localhost:8080/save/patient', patient);
  }

  patientPotochnuy() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Role', role);
    return this.http.get('http://localhost:8080/patient/potochnuy', {headers});

  }

  patientId(id) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Role', role);
    return this.http.get(`http://localhost:8080/doctor/patient/${id}`, {headers});
  }

  savePhoto(fileFormData) {
    return this.http.post('http://localhost:8080/save/photo', fileFormData, {observe: 'body'});
  }
}
