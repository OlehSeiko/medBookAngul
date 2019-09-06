import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  regis() {
    console.log(this.user);
    this.userService.save(this.user);
  }
}

