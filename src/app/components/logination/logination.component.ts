import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from '../../models/Login';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent implements OnInit {
  userLog: Login = new Login();

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }


  login() {
    this.loginService.login(this.userLog).subscribe(value => {
      localStorage.setItem('token', value.headers.get('Authorization').toString());

      localStorage.setItem('role', value.headers.get('Role'));

      this.router.navigate(['']);
    });
  }

  register() {
    this.router.navigate(['registration/patient']);
  }
}
