import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  about = "We are a leading fashion e-commerce platform, dedicated to bringing you the latest trends and styles. Our mission is to provide high-quality fashion at affordable prices, with a seamless shopping experience.";

}
