import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprotComponent } from './supprot.component';

describe('SupprotComponent', () => {
  let component: SupprotComponent;
  let fixture: ComponentFixture<SupprotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
