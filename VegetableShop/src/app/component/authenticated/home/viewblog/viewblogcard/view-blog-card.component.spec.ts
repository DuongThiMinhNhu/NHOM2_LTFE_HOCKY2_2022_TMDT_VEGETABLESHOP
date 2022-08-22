import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlogCardComponent } from './view-blog-card.component';

describe('ViewblogcardComponent', () => {
  let component: ViewBlogCardComponent;
  let fixture: ComponentFixture<ViewBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBlogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
