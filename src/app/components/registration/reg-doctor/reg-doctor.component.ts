import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {DoctorService} from '../../../services/doctor.service';
import {Role} from '../../../models/Role';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg-doctor',
  templateUrl: './reg-doctor.component.html',
  styleUrls: ['./reg-doctor.component.css']
})
export class RegDoctorComponent implements OnInit {

  doctorPhoto: File;
  pass2;

  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
  }

  registerDoctor() {
    this.doctor.role = Role.ROLE_DOCTOR;
    this.doctor.image = this.doctorPhoto.name;
    this.doctorService.save(this.doctor).subscribe(value => {
      console.log(value);
      this.router.navigate(['']);
    });

  }

  selectPhotoDoctor(event) {
    this.doctorPhoto = event.target.files[0];
  }
}
