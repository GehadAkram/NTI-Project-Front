import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  carouselImages = [
    { src: 'Black and White Minimalist Elegant Fashion Banner.png', alt: 'coming soon' }, 
    { src: 'desktop-banner1.jpeg', alt: 'sale 40%' },
    { src: 'desktop-banner2.jpeg', alt: 'best sellers' }, 
  ];
}
