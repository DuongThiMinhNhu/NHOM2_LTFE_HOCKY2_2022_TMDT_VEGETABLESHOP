import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home.component';
import {Routes} from "@angular/router";

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [NativeScriptRouterModule],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
