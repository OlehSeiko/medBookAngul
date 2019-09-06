import {Component} from '@angular/core';
import {HomeService} from './services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hom: string;


  constructor(private homeService: HomeService) {
  }

  getHome() {
    return this.homeService.getHome().subscribe(value => {
      this.hom = value;
    });
  }

}
