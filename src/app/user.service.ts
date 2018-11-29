import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  signupUsername: string;
  signupPassword: string;
  loginUsername: string;
  loginPassword: string;

  constructor(private http:HttpClient ) { }

  signup(username: string, password: string){
    this.http.post('',{'username': username, 'password': password});
    console.log(username, password)
  }

  login(username: string, password: string) {
    this.http.post('', {'username': username,'password': password}); 
    console.log(username, password);
   }



}
