import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }

  getSpeciality(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/speciality', {observe: 'body'});
  }

  save(doctor: Doctor) {
    return this.http.post('http://localhost:8080/save/doctor', doctor, {responseType: 'text'});
  }

  doctorPotochnuy() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    let headers = new HttpHeaders();

    headers = headers.append('Authorization', token);
    headers = headers.append('Role', role);
    return this.http.get('http://localhost:8080/doctor/potochnuy', {headers});
  }

  // recordToDoctor() {
  //     const token = localStorage.getItem('token');
  //     const role = localStorage.getItem('role');
  //     let headers = new HttpHeaders();
  //     headers = headers.append('Authorization', token);
  //     headers = headers.append('Role', role);
  //     return this.http.get('http://localhost:8080/patient/doctor', {headers});
  // }
  getDoctorsBySpetiality(speciality): Observable<Doctor[]> {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Role', role);
    return this.http.get<Doctor[]>(`http://localhost:8080/patient/doctor/${speciality}`, {headers});
  }
}
