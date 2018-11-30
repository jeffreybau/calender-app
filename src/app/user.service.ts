import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient ) { }

  signup(username: string, password: string,firstName: string, lastName: string){
   return this.http.post('/api/users/signup',{'username': username, 'password': password, 'firstName': firstName, 'lastName': lastName })
   .pipe(
     map(res => res),
     catchError(err => of(err.error))
   )
   ;
  }


  login(username: string, password: string) {
    this.http.post('/api/user.logn', {'username': username,'password': password})
    .pipe(

      map( res =>{
        console.log(res);
        if(res['success']){
            localStorage.setItem('user', JSON.stringify({usernmae: res['success'].username, id: res['success'].id}))
        }
        return res;
      }),
      catchError(err =>{
        console.log(err)
        return of ({err: err})})
    )
   }


}
