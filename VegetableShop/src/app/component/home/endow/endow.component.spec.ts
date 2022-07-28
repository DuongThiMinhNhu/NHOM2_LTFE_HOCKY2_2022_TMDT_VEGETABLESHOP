import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowComponent } from './endow.component';

describe('EndowComponent', () => {
  let component: EndowComponent;
  let fixture: ComponentFixture<EndowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
