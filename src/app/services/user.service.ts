import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private _authS:AuthService) {}

  host = 'http://localhost:3000';

  getUser(id:string) {
    return this._http.get<IUser>(this.host + '/user/' + id);
  }

  updateUser(userId:string, data:any): Observable<any> {
    let token = '';
    this._authS.getAccessToken().subscribe(data=>{
      if (data) {
        token = data;
      }
    });

    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
    return this._http.post<any>(this.host + "/user/" + userId, data, {headers})
  }
}
