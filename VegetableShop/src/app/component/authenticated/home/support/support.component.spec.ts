import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SupportComponent} from './support.component';

describe('SupprotComponent', () => {
    let component: SupportComponent;
    let fixture: ComponentFixture<SupportComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SupportComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SupportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
