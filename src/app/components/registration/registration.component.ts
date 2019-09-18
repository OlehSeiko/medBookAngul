import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {Role} from '../../models/Role';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
}

