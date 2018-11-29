import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'firstName': new FormControl('', [Validators.required, Validators.maxLength(12)]),
    'lastName': new FormControl('',[Validators.required, Validators.maxLength(20)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor( private userService: UserService) { }

    get user() {
      return this.signupForm.get('username');
    }


    get firstName(){
      return this.signupForm.get('firstName');
    }

    get lastName(){
      return this.signupForm.get('lastName');
    }

    get pass() {
      return this.signupForm.get('password');
    }

    signup(username: string, password: string){
      if (this.signupForm.valid){
        this.userService.signup(this.signupForm.value.username, this.signupForm.value.password);
      }
    }

  ngOnInit() {
  }

}
