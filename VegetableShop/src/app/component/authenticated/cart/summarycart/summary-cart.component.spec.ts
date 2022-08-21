import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryCartComponent} from './summary-cart.component';

describe('SummarycartComponent', () => {
    let component: SummaryCartComponent;
    let fixture: ComponentFixture<SummaryCartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SummaryCartComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SummaryCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
