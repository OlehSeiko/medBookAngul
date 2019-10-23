import {Component, OnInit} from '@angular/core';
import {Laboratory} from '../../models/Laboratory';
import {LaboratoryService} from '../../services/laboratory.service';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  laboratoryPotochuy: Laboratory;

  constructor(private laboratoryService: LaboratoryService) {
  }

  ngOnInit() {
    this.laboratoryService.laboratoryPotochuy().subscribe(value => {
      this.laboratoryPotochuy = value;
    });
  }

}
