import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecentBlogCardComponent} from './recent-blog-card.component';

describe('RecentBlogCardComponent', () => {
    let component: RecentBlogCardComponent;
    let fixture: ComponentFixture<RecentBlogCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecentBlogCardComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RecentBlogCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
