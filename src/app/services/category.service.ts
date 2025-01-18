import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
    
    host = "http://localhost:3000";
    staticFilesUrl = "http://localhost:3000/images/";
  
    getCategory() {
      return this.http.get<ICategory[]>(this.host+"/category");
    }
}
