import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDynamicComponent } from './cart-dynamic.component';

describe('CartDynamicComponent', () => {
  let component: CartDynamicComponent;
  let fixture: ComponentFixture<CartDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
