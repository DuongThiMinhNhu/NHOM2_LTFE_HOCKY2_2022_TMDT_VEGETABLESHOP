import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from "./component/authenticated/blog/blog.component";
import {CartComponent} from "./component/authenticated/cart/cart.component";
import {ContactComponent} from "./component/authenticated/contact/contact.component";
import {HomeComponent} from "./component/authenticated/home/home.component";
import {LoginComponent} from "./component/public/login/login.component";
import {MenuComponent} from "./component/authenticated/menu/menu.component";
import {BannerComponent} from "./component/authenticated/banner/banner.component";
import {AuthenticatedComponent} from "./component/authenticated/authenticated.component";
import {PublicComponent} from "./component/public/public.component";
import {RegisterComponent} from "./component/public/register/register.component";
import {PagenotfoundComponent} from "./component/authenticated/pagenotfound/pagenotfound.component";

const routes: Routes = [
    {path:'', component:PublicComponent,
        children: [
            {path: 'login' , component: LoginComponent},
            {path: 'register',component: RegisterComponent},
            {path: '' ,pathMatch:"full", redirectTo:"login"},
        ],},
    {path:'', component:AuthenticatedComponent,
    children: [
        {path: 'blogs' , component: BlogComponent},
        {path: 'cart' , component: CartComponent},
        {path: 'contact' , component: ContactComponent},
        {path: 'home' , component: HomeComponent},
        {path: 'menu' , component: MenuComponent},
        {path: 'banner' , component: BannerComponent},
        {path: '' ,pathMatch:"full", redirectTo:"home"},
        {path: '**',component: PagenotfoundComponent}
    ],},

    // {path: 'blog/:id' , component: ContactDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}