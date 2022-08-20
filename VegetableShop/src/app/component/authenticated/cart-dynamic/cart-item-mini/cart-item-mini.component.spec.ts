import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemMiniComponent } from './cart-item-mini.component';

describe('CartItemMiniComponent', () => {
  let component: CartItemMiniComponent;
  let fixture: ComponentFixture<CartItemMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
