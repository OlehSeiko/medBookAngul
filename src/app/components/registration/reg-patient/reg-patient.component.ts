import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';
import {Role} from '../../../models/Role';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-reg-patient',
  templateUrl: './reg-patient.component.html',
  styleUrls: ['./reg-patient.component.css']
})
export class RegPatientComponent implements OnInit {
  photo: File;

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  regis() {
    this.patient.role = Role.ROLE_PATIENT;
    this.patient.image = this.photo.name;
    console.log(this.patient);
    this.patientService.save(this.patient).subscribe(value => {
      console.log(value);

      const fileFormData: FormData = new FormData();
      fileFormData.append('photo', this.photo, this.photo.name);
      this.patientService.savePhoto(fileFormData).subscribe(value1 => {
        console.log(value1.toString());
      });

    });
    this.router.navigate(['']);
  }

  selectPhoto(event) {
    this.photo = event.target.files[0];
    console.log(this.photo.name);
    // const fileFormData: FormData = new FormData();
    // fileFormData.append('photo', this.photo, this.photo.name);
    // this.patientService.savePhoto(fileFormData).subscribe(value1 => {
    //   console.log(value1);
    // });
  }

  // saveFile() {
  //   const fileFormData: FormData = new FormData();
  //   fileFormData.append('photo', this.photo, this.photo.name);
  //   this.userSrvice.savePhoto(fileFormData).subscribe(value => {
  //     console.log(value);
  //   });
  // }
}
