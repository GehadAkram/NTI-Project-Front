import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product = {
    id: '1', 
    name: 'Product 1', 
    description: 'This is a sample product description.',
    price: 500, 
    image: 'product1.png',
    category: 'Electronics',
    supercategory: 'Gadgets',
    quantity: 10,
    inStock: true,
    bestSeller: true
  };

    productId!: string;
  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.productId = params.get('id')!;
        // Fetch product details using this.productId
      });
    }

}
