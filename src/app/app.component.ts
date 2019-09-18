import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    } else {
      if (localStorage.getItem('role') === '[ROLE_PATIENT]') {
        this.router.navigate(['/patient']);
      } else {
        if (localStorage.getItem('role') === '[ROLE_DOCTOR]') {
          this.router.navigate(['/doctor']);
        } else {
          this.router.navigate(['/laboratory']);
        }
      }
    }
  }


}
