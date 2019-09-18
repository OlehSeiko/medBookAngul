import {Component, OnInit} from '@angular/core';
import {Laboratory} from '../../../models/Laboratory';
import {LaboratoryService} from '../../../services/laboratory.service';
import {Role} from '../../../models/Role';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg-laboratory',
  templateUrl: './reg-laboratory.component.html',
  styleUrls: ['./reg-laboratory.component.css']
})
export class RegLaboratoryComponent implements OnInit {
  labor2;

  laboratory: Laboratory = new Laboratory();

  constructor(private laboratoryService: LaboratoryService, private router: Router) {
  }

  ngOnInit() {
  }

  registrLaboratory() {
    this.laboratory.role = Role.ROLE_LABORATORY;
    this.laboratoryService.save(this.laboratory).subscribe(value => {
      console.log(value);
      this.router.navigate(['']);
    });
  }
}
