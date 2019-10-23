import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../models/Doctor';
import {DoctorService} from '../../services/doctor.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorPotochnuy: Doctor;

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
    this.doctorService.doctorPotochnuy().subscribe(value => {
      this.doctorPotochnuy = value;
    });
  }

  selectPatient() {
    this.router.navigate(['doctor', 'select-patient']);
  }

  exit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
