import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollToSection(fragment: string) {
      this.router.navigate([], { fragment }).then(() => {
          this.viewportScroller.scrollToAnchor(fragment);
      });
  }
}
