import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject: BehaviorSubject <string | null> = new BehaviorSubject <string | null> (null);

  constructor(private _http:HttpClient) { 
    const token = localStorage.getItem('token');
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  

  api= "http://localhost:3000/user/login";

  login(loginObj:any): Observable<any> {
    return this._http.post<any>(this.api, loginObj).pipe(
      tap(res => {
        const token = res.accessToken;
        if (token) {
          localStorage.setItem('token', token);
          this.tokenSubject.next(token);
        }
      console.log(token);
      
    }))
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);

  }

  getAccessToken(): Observable <string | null> {
    return this.tokenSubject.asObservable();
  }

  isAuthorized(): boolean {
    return this.tokenSubject.value !== null;
  }

  decodeToken ():any {
    const token = this.tokenSubject.value;
    if (token) {
      return jwtDecode<any>(token);
    }
    else {
      return null;
    }
  }
}
