import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-best-sellers',
  standalone: false,
  
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent implements OnInit{
  constructor (private _productS: ProductsService) {}
  
  products!:IProduct[];
  staticUrl ='';

  ngOnInit(): void {
    this._productS.getBestSellers().subscribe( data => {
      this.products = data} );
    this.staticUrl = this._productS.staticFilesUrl;
  }
}
