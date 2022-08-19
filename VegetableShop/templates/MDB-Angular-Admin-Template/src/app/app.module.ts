import {ToastModule} from 'ng-uikit-pro-standard';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ViewsModule} from './views/views.module';
import {SharedModule} from './shared/shared.module';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {ErrorModule} from './views/errors/error.module';

// main layout
import {NavigationModule} from './main-layout/navigation/navigation.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NavigationModule,
        AppRoutingModule,
        FormsModule,
        SharedModule,
        ViewsModule,
        ErrorModule,
        ToastModule.forRoot(),
        ReactiveFormsModule,
    ],
    providers: [MDBSpinningPreloader],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
