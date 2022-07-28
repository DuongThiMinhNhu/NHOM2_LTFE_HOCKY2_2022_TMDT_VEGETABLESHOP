import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
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
import { ListcartComponent } from './component/authenticated/cart/listcart/listcart.component';
import {CarouselComponent} from "./component/authenticated/home/carousel/carousel.component";
import { HomeComponent } from './component/authenticated/home/home.component';
import { SupportComponent } from './component/authenticated/home/support/support.component';
import { IntroduceComponent } from './component/authenticated/home/introduce/introduce.component';
import { MenuComponent } from './component/authenticated/menu/menu.component';
import { ProductCardComponent } from './component/authenticated/menu/product-card/product-card.component';
import {ContactComponent} from "./component/authenticated/contact/contact.component";
import {HomeService} from "./services/home/home.service";
import { BlogComponent } from './component/authenticated/blog/blog.component';
import { BannerComponent } from './component/authenticated/banner/banner.component';
import { BlogCardComponent } from './component/authenticated/blog/blog-card/blog-card.component';
import { RecentBlogCardComponent } from './component/authenticated/blog/recent-blog-card/recent-blog-card.component';
import { LoginComponent } from './component/public/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './component/public/public.component';
import { AuthenticatedComponent } from './component/authenticated/authenticated.component';
import {CheckOutComponent} from "./component/authenticated/check-out/check-out.component";
import {CartTotalComponent} from "./component/authenticated/check-out/cart-total/cart-total.component";
import {AdvertComponent} from "./component/authenticated/home/advert/advert.component";
import {PaymentComponent} from "./component/authenticated/check-out/payment/payment.component";
import {CheckOutFormComponent} from "./component/authenticated/check-out/check-out-form/check-out-form.component";
import {DetailProductComponent} from "./component/authenticated/detail-product/detail-product.component";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        ListcartComponent,
        CarouselComponent,
        HomeComponent,
        SupportComponent,
        IntroduceComponent,
        MenuComponent,
        ProductCardComponent,
        ContactComponent,
        BlogComponent,
        BannerComponent,
        BlogCardComponent,
        RecentBlogCardComponent,
        CheckOutComponent,
        CheckOutFormComponent,
        CartTotalComponent,
        PaymentComponent,
        DetailProductComponent,
        AdvertComponent,
         PublicComponent,
        AuthenticatedComponent,
        LoginComponent,
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
  ],
  providers: [
      MDBSpinningPreloader,
      HomeService
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
