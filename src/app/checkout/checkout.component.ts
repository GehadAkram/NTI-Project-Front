import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: false,
  
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(private router: Router) { };
  
  cart = {
    user: '60d0fe4f5311236168a109ca',
    products: [
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
        quantity: 2,
      }
    ],
    total: 100,
    state: '67864b3921f4118a4da25e7e',
    shippingAddress: '1234 Elm Street, Springfield, IL'
  };

  estimatedDeliveryDate = this.calculateEstimatedDeliveryDate();

  getTotalItems() {
    return this.cart.products.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal() {
    return this.cart.products.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    const shipping = 5.00; 
    return (parseFloat(subtotal) + shipping).toFixed(2);
  }

  calculateEstimatedDeliveryDate() {
    const date = new Date();
    date.setDate(date.getDate() + 5); 
    return date.toLocaleDateString();
  }

  onSubmit() {
    alert('Order placed successfully!');
    // Add your order processing logic here
  }

  viewProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

  increaseQuantity(index: number) {
    if (this.cart.products[index]) {
      this.cart.products[index].quantity++;
      this.getSubtotal();
    }
  }

  decreaseQuantity(index: number) {
    if (this.cart.products[index] && this.cart.products[index].quantity > 1) {
      this.cart.products[index].quantity--;
      this.getSubtotal();
    }
  }

  removeFromCart(product: any) {
    const index = this.cart.products.indexOf(product);
    this.cart.products.splice(index, 1);
    this.getSubtotal();
  }
}
