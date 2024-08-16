import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService{
  private apiUrl = 'http://127.0.0.1:12000';  // Update with your API URL

  private loginUrl = 'http://192.168.11.12:5069/login';

  private signupUrl = 'http://192.168.11.12:5069/register';

  constructor(private http: HttpClient){}

  // signup(data:any):Observable<any>{
  //   return this.http.post(`${this.apiUrl}/signup`, data);
  // }

  login(email: string, password: string): Observable<any>{
    const body = { email, password };
    console.log('body : ', body);
    return this.http.post(this.loginUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(tap((result) => {
      localStorage.setItem('authUser', JSON.stringify(result));
    }));
  }
  signup(firstName: string, lastName: string, email: string, password: string, currentState: string): Observable<any>{
    console.log(currentState);
    const body = { email, password, firstName, lastName, role: currentState };
    return this.http.post(this.signupUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(tap((result) => {
      localStorage.setItem('authUser', JSON.stringify(result));
    }));
  }
}
