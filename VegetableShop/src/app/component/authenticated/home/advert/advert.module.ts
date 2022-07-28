import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertComponent } from './advert.component';



@NgModule({
    declarations: [
        AdvertComponent
    ],
    exports: [
        AdvertComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AdvertModule { }
