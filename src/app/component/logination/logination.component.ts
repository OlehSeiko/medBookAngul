import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from '../../models/Login';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent implements OnInit {
 userLog: Login = new Login();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }


  login() {
    this.loginService.login(this.userLog);
  }
}
