import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentfbComponent } from './commentfb.component';

describe('CommentfbComponent', () => {
  let component: CommentfbComponent;
  let fixture: ComponentFixture<CommentfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentfbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
