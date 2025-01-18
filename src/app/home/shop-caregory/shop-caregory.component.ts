import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { SupercategoryService } from '../../services/supercategory.service';
import { ICategory } from '../../interfaces/category';
import { ISuperCategory } from '../../interfaces/super-category';

@Component({
  selector: 'app-shop-caregory',
  standalone: false,

  templateUrl: './shop-caregory.component.html',
  styleUrl: './shop-caregory.component.css',
})
export class ShopCaregoryComponent implements OnInit, AfterViewInit {
  constructor (private _categoryS:CategoryService, private _superCategoryS:SupercategoryService) {}

  ngOnInit(): void {
    this._categoryS.getCategory().subscribe ( data => {
      this.categories= data;
    });
    this._superCategoryS.getSuperCategory().subscribe ( data => {
      this.supercategories= data;
    });
    this.staticUrl = this._categoryS.staticFilesUrl;
  }

  categories!: ICategory[];
  supercategories!: ISuperCategory[];
  staticUrl ='';
  
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
