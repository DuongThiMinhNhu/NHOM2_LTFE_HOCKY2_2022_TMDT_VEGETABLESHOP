import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidenavComponent} from './sidenav.component';

@NgModule({
    declarations: [
        SidenavComponent,
    ],
    exports: [
        SidenavComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class SidenavModule {
}
