import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cataloge',
  standalone: false,
  
  templateUrl: './cataloge.component.html',
  styleUrl: './cataloge.component.css'
})
export class CatalogeComponent implements OnInit{

  constructor (private _productS: ProductsService) {}
    
    products!:IProduct[];
    staticUrl ='';
  
    ngOnInit(): void {
      this._productS.getAllProducts().subscribe( data => {
        this.products = data} );
      this.staticUrl = this._productS.staticFilesUrl;
    }
}
