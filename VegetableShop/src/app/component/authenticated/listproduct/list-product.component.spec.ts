import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListProductComponent} from './list-product.component';

describe('ListproductComponent', () => {
    let component: ListProductComponent;
    let fixture: ComponentFixture<ListProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListProductComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
