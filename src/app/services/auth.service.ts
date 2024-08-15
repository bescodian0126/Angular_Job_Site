import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService{
  private apiUrl = 'http://127.0.0.1:12000';  // Update with your API URL

  private loginUrl = 'http://127.0.0.1:12000';

  constructor(private http: HttpClient){}

  signup(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  login(username: string, password: string): Observable<any>{
    const body = { username, password };
    return this.http.post(this.loginUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(tap((result) => {
      localStorage.setItem('authUser', JSON.stringify(result));
    }));
  }
}
