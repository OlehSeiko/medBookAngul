import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {DoctorService} from '../../../services/doctor.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-record-to-doctor',
  templateUrl: './record-to-doctor.component.html',
  styleUrls: ['./record-to-doctor.component.css']
})
export class RecordToDoctorComponent implements OnInit {

  doctors: Doctor[] = [];
  isSelectSpec = true;
  specialities;
  special;
  spec = true;

  constructor(private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit() {
    this.doctorService.getSpeciality().subscribe(value => {
      this.specialities = value;
    });
  }


  selectSpeciality(data: NgForm) {
    console.log(this.special);
    this.doctorService.getDoctorsBySpetiality(data.value.speciality).subscribe(value => {
      this.doctors = value;

      console.log(this.doctors);
      this.isSelectSpec = false;
      this.spec = false;
    });

  }

}
