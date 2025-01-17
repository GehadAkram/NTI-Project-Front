import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCaregoryComponent } from './shop-caregory.component';

describe('ShopCaregoryComponent', () => {
  let component: ShopCaregoryComponent;
  let fixture: ComponentFixture<ShopCaregoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopCaregoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCaregoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
