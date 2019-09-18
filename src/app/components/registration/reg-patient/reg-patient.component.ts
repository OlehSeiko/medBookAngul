import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';
import {Role} from '../../../models/Role';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg-patient',
  templateUrl: './reg-patient.component.html',
  styleUrls: ['./reg-patient.component.css']
})
export class RegPatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit() {
  }

  regis() {
    this.patient.role = Role.ROLE_PATIENT;
    console.log(this.patient);
    this.patientService.save(this.patient).subscribe(value => {
      console.log(value);
    });
      this.router.navigate(['']);
  }

}
