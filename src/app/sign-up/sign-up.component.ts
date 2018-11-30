import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

error: Object = {};

signupForm: FormGroup
  constructor( private userService: UserService, private router: Router) { }

    get username() {
      return this.signupForm.get('username');
    }


    get firstName(){
      return this.signupForm.get('firstName');
    }

    get lastName(){
      return this.signupForm.get('lastName');
    }

    get password() {
      return this.signupForm.get('password');
    }

    signup(){
      console.log(this.signupForm)
      this.error = {}
      if(this.signupForm.valid){
        this.userService.signup(this.username.value, this.password.value, this.firstName.value, this.lastName.value)
        .subscribe(res => console.log(res))

      
      }

    }

  ngOnInit() {

    this.signupForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'firstName': new FormControl('', [Validators.required, Validators.maxLength(12)]),
      'lastName': new FormControl('',[Validators.required, Validators.maxLength(20)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
