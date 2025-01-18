import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product!:IProduct;

    productId!: string;
    staticUrl ='';
  
    constructor(private route: ActivatedRoute, private _productS:ProductsService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.productId = params.get('id')!;
      });
      this._productS.getProductById(this.productId).subscribe(data=> {
        this.product=data;
      });
      this.staticUrl=this._productS.staticFilesUrl;
    }
}
