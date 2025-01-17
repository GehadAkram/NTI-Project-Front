import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: false,
  
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.updatePriceRange();
  }

  superCategories = [ 
    { name: 'Men', image: ''},
    { name: 'Women', image: ''},
  ]

  categories = [ 
    { name: 'Jackets', image: ''},
    { name: 'Jeans', image: ''},
    { name: 'Shirts', image: ''},
    { name: 'Pants', image: ''},
  ]

  maxPrice = 0;
  inStock = true;
  bestSeller = false;

  updatePriceRange() {
    const priceRange = document.getElementById('priceRange') as HTMLInputElement;
    const priceRangeValue = document.getElementById('priceRangeValue');
    if (priceRange && priceRangeValue) {
      priceRangeValue.textContent = `0-$${priceRange.value}`;
      priceRange.style.setProperty('--value', (Number(priceRange.value) - Number(priceRange.min)) / (Number(priceRange.max) - Number(priceRange.min)) * 100 + '%');
    }
  }
}
