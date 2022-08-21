import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PagingationComponent} from './pagingation.component';

describe('PagingationComponent', () => {
    let component: PagingationComponent;
    let fixture: ComponentFixture<PagingationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PagingationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PagingationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
