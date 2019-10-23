import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../models/Patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientPotochnuy: Patient;

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit() {
    this.patientService.patientPotochnuy().subscribe(value => {
      this.patientPotochnuy = value;
    });
  }

  recordToDoctor() {
    this.router.navigate(['patient', 'record-doctor']);
  }
  exit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
