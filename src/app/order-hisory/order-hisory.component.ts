import { Component } from '@angular/core';

@Component({
  selector: 'app-order-hisory',
  standalone: false,

  templateUrl: './order-hisory.component.html',
  styleUrl: './order-hisory.component.css',
})
export class OrderHisoryComponent {
  orders = [
    {
      id: 1,
      products: [
        { product: {name: 'Laptop1', image: 'product1.png'}, quantity: 1 },
        { product: {name: 'Laptop1', image: 'product1.png'}, quantity: 1 },
      ],
      state: 'Shipped',
      total: 500,
      shippingAddress: '123 Main St, City, Country',
    },
    {
      id: 2,
      products: [
        { product: {name: 'Laptop1', image: 'product2.png'}, quantity: 1 },
        { product: {name: 'Laptop1', image: 'product2.png'}, quantity: 1 },
      ],
      quantity: 2,
      state: 'Processing',
      total: 300,
      shippingAddress: '456 Elm St, City, Country',
    },
    {
      id: 3,
      products: [
        { product: {name: 'Laptop1', image: 'product3.png'}, quantity: 1 },
        { product: {name: 'Laptop1', image: 'product3.png'}, quantity: 1 },
      ],
      quantity: 3,
      state: 'delivered',
      total: 100,
      shippingAddress: '789 Oak St, City, Country',
    },
    {
      id: 4,
      products: [
        { product: {name: 'Laptop1', image: 'product1.png'}, quantity: 1 },
        { product: {name: 'Laptop1', image: 'product1.png'}, quantity: 1 },
      ],
      quantity: 1,
      state: 'cancelled',
      total: 200,
      shippingAddress: '101 Pine St, City, Country',
    },
  ];
}
