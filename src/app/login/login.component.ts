import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  loginForm = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private userService: UserService) { }

  get user() {
    return this.loginForm.get('username');
  }  
get pass() {
  return this.loginForm.get('password');
}

login() {
  if (this.loginForm.valid) {
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password);
  }
}



  ngOnInit() {
  }

}
