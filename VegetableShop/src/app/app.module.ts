import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';
import { MdbCalendarModule } from 'mdb-calendar';
import { MdbColorPickerModule } from 'mdb-color-picker';
import { MdbDraggableModule } from 'mdb-draggable';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { MdbSortableModule } from 'mdb-sortable';
import { MdbTableEditorModule } from 'mdb-table-editor';
import { MdbWysiwygModule } from 'mdb-wysiwyg';
import { HeaderComponent } from './component/authenticated/header/header.component';
import { FooterComponent } from './component/authenticated/footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CartComponent } from './component/authenticated/cart/cart.component';
import { ListCartComponent } from './component/authenticated/cart/listcart/list-cart.component';
import {CarouselComponent} from "./component/authenticated/home/carousel/carousel.component";
import { HomeComponent } from './component/authenticated/home/home.component';
import { SupportComponent } from './component/authenticated/home/support/support.component';
import { IntroduceComponent } from './component/authenticated/home/introduce/introduce.component';
import { MenuComponent } from './component/authenticated/menu/menu.component';
import { ProductCardComponent } from './component/authenticated/listproduct/product-card/product-card.component';
import {ContactComponent} from "./component/authenticated/contact/contact.component";
import {HomeService} from "./services/home/home.service";
import { BlogComponent } from './component/authenticated/blog/blog.component';
import { BannerComponent } from './component/authenticated/banner/banner.component';
import { PostCardComponent } from './component/authenticated/blog/post-card/post-card.component';
import { RecentBlogCardComponent } from './component/authenticated/blog/recent-blog-card/recent-blog-card.component';
import { LoginComponent } from './component/public/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './component/public/public.component';
import { AuthenticatedComponent } from './component/authenticated/authenticated.component';
import {CheckOutComponent} from "./component/authenticated/check-out/check-out.component";
import {CartTotalComponent} from "./component/authenticated/check-out/cart-total/cart-total.component";
import {PaymentComponent} from "./component/authenticated/check-out/payment/payment.component";
import {CheckOutFormComponent} from "./component/authenticated/check-out/check-out-form/check-out-form.component";
import {DetailProductComponent} from "./component/authenticated/detail-product/detail-product.component";
import { RegisterComponent } from './component/public/register/register.component';
import { PagenotfoundComponent } from './component/authenticated/pagenotfound/pagenotfound.component';
import { OutstandingComponent } from './component/authenticated/home/outstanding/outstanding.component';
import { ProfileComponent } from './component/authenticated/profile/profile.component';
import {ProductService} from "./services/product/product.service";
import {HandleJsonService} from "./services/handlejson/handlejson.service";
import { PagingationComponent } from './component/authenticated/pagingation/pagingation.component';
import { AboutComponent } from './component/authenticated/about/about.component';
import { SettingComponent } from './component/authenticated/setting/setting.component';
import { DetailBlogComponent } from './component/authenticated/blog/detail-post/detail-blog.component';
import {AdvertComponent} from "./component/authenticated/home/advert/advert.component";
import { LoginGoogleComponent } from './component/public/login-google/login-google.component';
import { HeartComponent } from './component/authenticated/listproduct/product-card/heart/heart.component';
import {ModalComponent} from "./component/authenticated/menu/modal/modal.component";
import { CartDynamicComponent } from './component/authenticated/cart-dynamic/cart-dynamic.component';
import { CartItemComponent } from './component/authenticated/cart/listcart/cart-item/cart-item.component';
import { SummaryCartComponent } from './component/authenticated/cart/summarycart/summary-cart.component';
import { TabComponent } from './component/authenticated/profile/tab/tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ProductItemComponent } from './component/authenticated/profile/product-item/product-item.component';
import { CommentComponent } from './component/authenticated/blog/comment/comment.component';
import { ListProductComponent } from './component/authenticated/listproduct/list-product.component';
import { ForgotPasswordComponent } from './component/public/forgot-password/forgot-password.component';
import { ListPostComponent } from './component/authenticated/blog/list-post/list-post.component';
import { ChangePasswordComponent } from './component/public/change-password/change-password.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        ListCartComponent,
        CarouselComponent,
        HomeComponent,
        SupportComponent,
        IntroduceComponent,
        MenuComponent,
        ProductCardComponent,
        ContactComponent,
        BlogComponent,
        BannerComponent,
        PostCardComponent,
        RecentBlogCardComponent,
        CheckOutComponent,
        CheckOutFormComponent,
        CartTotalComponent,
        PaymentComponent,
        DetailProductComponent,
        PublicComponent,
        AuthenticatedComponent,
        LoginComponent,
        RegisterComponent,
        PagenotfoundComponent,
        OutstandingComponent,
        ProfileComponent,
        PagingationComponent,
        AboutComponent,
        SettingComponent,
        DetailBlogComponent,
        AdvertComponent,
        LoginGoogleComponent,
        HeartComponent,
        ModalComponent,
        CartDynamicComponent,
        CartItemComponent,
        SummaryCartComponent,
        TabComponent,
        ProductItemComponent,
        CommentComponent,
        ListProductComponent,
        ForgotPasswordComponent,
        ListPostComponent,
        ChangePasswordComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ToastModule.forRoot(),
        MDBBootstrapModulesPro.forRoot(),
        MdbCalendarModule,
        MdbColorPickerModule,
        MdbDraggableModule,
        MdbFileUploadModule,
        MdbSortableModule,
        MdbTableEditorModule,
        MdbWysiwygModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        AppRoutingModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
        MatTabsModule,
    ],
    providers: [
        MDBSpinningPreloader,
        HomeService,
        ProductService,
        HandleJsonService
    ],
    bootstrap: [AppComponent],
    exports: [
        AdvertComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
