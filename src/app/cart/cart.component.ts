import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart = [
    {
      product: {
        id: '1',
        name: 'Product 1',
        price: 29.99,
        image: 'product1.png',
      },
      quantity: 1,
    },
    {
      product: {
        id: '2',
        name: 'Product 2',
        price: 13.5,
        image: 'product2.png',
      },
      quantity: 1,
    },
    {
      product: {
        id: '3',
        name: 'Product 3',
        price: 199.99,
        image: 'product3.png',
      },
      quantity: 1,
    },
  ];
  subtotal = 0;

  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
    this.getSubtotal();
  }

  increaseQuantity(index: number) {
    if (this.cart[index]) {
      this.cart[index].quantity++;
      this.getSubtotal();
    }
  }

  decreaseQuantity(index: number) {
    if (this.cart[index] && this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
      this.getSubtotal();
    }
  }

  getSubtotal() {
    this.subtotal = this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    this.subtotal = Math.round(this.subtotal * 100) / 100;
    return this.subtotal;
  }

  ngOnInit() {
    this.getSubtotal();
  }

  constructor(private router: Router) { }

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }
}
