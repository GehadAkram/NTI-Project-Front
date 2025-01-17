import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: false,
  
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  addToWishlist(productId: string) {
    // Add product to wishlist
  }
  addToCart(productId: string) {
  }

  constructor(private router: Router) { }
  viewProductDetails(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
