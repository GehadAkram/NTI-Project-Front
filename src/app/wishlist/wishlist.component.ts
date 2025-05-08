import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private router: Router) { }
  
  wishlist =[
    {
      id: '1',
      name: 'Product 1',
      price: 29.99,
      img: 'product1.png'
    },
    {
      id: '2',
      name: 'Product 2',
      price: 49.99,
      img: 'product2.png'
    }
  ]

  removeFromWishlist(product: any) {
    const index = this.wishlist.indexOf(product);
    this.wishlist.splice(index, 1);
  } 

  addToCart(product: any) {
    this.removeFromWishlist(product);
  }

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

}
