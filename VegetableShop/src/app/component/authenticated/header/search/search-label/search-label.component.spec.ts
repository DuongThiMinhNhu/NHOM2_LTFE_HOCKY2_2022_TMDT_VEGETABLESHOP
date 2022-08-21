import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLabelComponent } from './search-label.component';

describe('SearchLabelComponent', () => {
  let component: SearchLabelComponent;
  let fixture: ComponentFixture<SearchLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
