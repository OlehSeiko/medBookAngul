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
  special;
  specialities;

  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
    this.doctorService.getSpeciality().subscribe(value => {
      this.specialities = value;
    });
  }

  registerDoctor() {
    this.doctor.role = Role.ROLE_DOCTOR;
    this.doctor.image = this.doctorPhoto.name;
    console.log(this.doctor);

    this.doctorService.save(this.doctor).subscribe(value => {
      console.log(value);

      const fileFormData: FormData = new FormData();
      fileFormData.append('photo', this.doctorPhoto, this.doctorPhoto.name);
      this.doctorService.savePhotoDoctor(fileFormData).subscribe(value1 => {
        console.log(value1.toString());
      });

      this.router.navigate(['']);
    });

  }

  selectPhotoDoctor(event) {
    this.doctorPhoto = event.target.files[0];
  }
}
