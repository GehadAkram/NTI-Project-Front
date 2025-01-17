import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHisoryComponent } from './order-hisory.component';

describe('OrderHisoryComponent', () => {
  let component: OrderHisoryComponent;
  let fixture: ComponentFixture<OrderHisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderHisoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
