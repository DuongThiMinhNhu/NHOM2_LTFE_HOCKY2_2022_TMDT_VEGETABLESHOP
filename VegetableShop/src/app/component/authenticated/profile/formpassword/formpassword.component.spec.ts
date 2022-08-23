import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpasswordComponent } from './formpassword.component';

describe('FormpasswordComponent', () => {
  let component: FormpasswordComponent;
  let fixture: ComponentFixture<FormpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
