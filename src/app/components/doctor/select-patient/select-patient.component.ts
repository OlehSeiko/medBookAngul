import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/Patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-patient',
  templateUrl: './select-patient.component.html',
  styleUrls: ['./select-patient.component.css']
})
export class SelectPatientComponent implements OnInit {
  selectPatient: Patient;

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit() {


  }

  searchPatient(id) {
    this.patientService.patientId(id).subscribe(value => {
      this.selectPatient = value;
    });

  }
}
