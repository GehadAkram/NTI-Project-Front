import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-caregory',
  standalone: false,

  templateUrl: './shop-caregory.component.html',
  styleUrl: './shop-caregory.component.css',
})
export class ShopCaregoryComponent {
  categories = [
    { name: 'Shirts', image: 'shirts.jpg' },
    { name: 'Pants', image: 'pants.jpeg' },
    { name: 'Dresses', image: 'dresses.webp' },
    { name: 'Jeans', image: 'jeans.webp' },
  ];
  
  ngAfterViewInit() {
    const scrollLeft = document.getElementById('scroll-left');
    const scrollRight = document.getElementById('scroll-right');
    const categoryContainer = document.getElementById('category-container');

    if (scrollLeft && categoryContainer) {
      scrollLeft.onclick = function () {
        categoryContainer.scrollBy({ left: -150, behavior: 'smooth' });
      };
    }

    if (scrollRight && categoryContainer) {
      scrollRight.onclick = function () {
        categoryContainer.scrollBy({ left: 150, behavior: 'smooth' });
      };
    }
  }
}
