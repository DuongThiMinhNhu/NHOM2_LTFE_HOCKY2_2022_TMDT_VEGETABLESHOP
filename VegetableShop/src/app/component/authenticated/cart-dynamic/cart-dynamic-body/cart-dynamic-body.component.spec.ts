import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDynamicBodyComponent } from './cart-dynamic-body.component';

describe('CartDynamicBodyComponent', () => {
  let component: CartDynamicBodyComponent;
  let fixture: ComponentFixture<CartDynamicBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDynamicBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDynamicBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
