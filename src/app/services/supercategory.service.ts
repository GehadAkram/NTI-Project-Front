import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISuperCategory } from '../interfaces/super-category';

@Injectable({
  providedIn: 'root'
})
export class SupercategoryService {

  constructor(private http:HttpClient) { }
  
  host = "http://localhost:3000";
  staticFilesUrl = "http://localhost:3000/images/";

  getSuperCategory() {
    return this.http.get<ISuperCategory[]>(this.host+"/supercategory");
  }
}
