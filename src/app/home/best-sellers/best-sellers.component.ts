import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-best-sellers',
  standalone: false,
  
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent {
  products: IProduct[] = [ 
    {id: '1', name: 'Product 1', price: 500, image: 'product1.png'}, 
    {id: '2', name: 'Product 2', price: 200, image: 'product2.png'},
    {id: '3', name: 'Product 3', price: 300, image: 'product3.png'}, 
  ];
}
