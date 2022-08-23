import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from "./component/authenticated/blog/blog.component";
import {CartComponent} from "./component/authenticated/cart/cart.component";
import {ContactComponent} from "./component/authenticated/contact/contact.component";
import {HomeComponent} from "./component/authenticated/home/home.component";
import {LoginComponent} from "./component/public/login/login.component";
import {MenuComponent} from "./component/authenticated/menu/menu.component";
import {AuthenticatedComponent} from "./component/authenticated/authenticated.component";
import {PublicComponent} from "./component/public/public.component";
import {RegisterComponent} from "./component/public/register/register.component";
import {PagenotfoundComponent} from "./component/authenticated/pagenotfound/pagenotfound.component";
import {ProfileComponent} from "./component/authenticated/profile/profile.component";
import {DetailProductComponent} from "./component/authenticated/detail-product/detail-product.component";
import {AboutComponent} from "./component/authenticated/about/about.component";
import {SettingComponent} from "./component/authenticated/setting/setting.component";
import {CheckOutComponent} from "./component/authenticated/check-out/check-out.component";
import {ForgotPasswordComponent} from "./component/public/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./component/public/change-password/change-password.component";
import {AuthGuardService as AuthGuard} from "./services/auth-guard/auth-guard.service";

const routes: Routes = [
    {
        path: '', component: PublicComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'forgotPassword', component: ForgotPasswordComponent},
            {path: 'changePassword', component: ChangePasswordComponent},
            {path: '', pathMatch: "full", redirectTo: "login"},
        ],
    },
    {
        path: '', component: AuthenticatedComponent,
        children: [
            {path: 'blog', component: BlogComponent},
            {path: 'cart', component: CartComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'about', component: AboutComponent},
            {path: 'detail-product/:id', component: DetailProductComponent},
            {path: 'home', component: HomeComponent},
            {path: 'menu', component: MenuComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'setting', component: SettingComponent},
            {path: 'check-out', component: CheckOutComponent,canActivate:[AuthGuard]},
            {path: '', pathMatch: "full", redirectTo: "home"},
        ],
    },
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}