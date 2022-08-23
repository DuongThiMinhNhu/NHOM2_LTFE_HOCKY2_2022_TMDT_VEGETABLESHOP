import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbillComponent } from './modalbill.component';

describe('ModalbillComponent', () => {
  let component: ModalbillComponent;
  let fixture: ComponentFixture<ModalbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
