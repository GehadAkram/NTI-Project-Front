import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  host = "http://localhost:3000";
  staticFilesUrl = "http://localhost:3000/images/";

  getAllProducts() {
    return this.http.get<IProduct[]>(this.host+"/product");
  }

  getBestSellers() {
    return this.http.get<IProduct[]>(this.host+"/product/bestSellers");
  }

  getProductById(id:string) {
    return this.http.get<IProduct>(this.host+"/product/"+id);
  }
}
