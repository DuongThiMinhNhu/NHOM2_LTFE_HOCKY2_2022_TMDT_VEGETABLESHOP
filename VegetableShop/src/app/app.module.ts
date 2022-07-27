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
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
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
import { CartComponent } from './component/cart/cart.component';
import { ListcartComponent } from './component/cart/listcart/listcart.component';
import {CarouselComponent} from "./component/home/carousel/carousel.component";
import { HomeComponent } from './component/home/home.component';
import { SupprotComponent } from './component/home/supprot/supprot.component';
import { IntroduceComponent } from './component/home/introduce/introduce.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProductCardComponent } from './component/menu/product-card/product-card.component';
import {ContactComponent} from "./component/contact/contact.component";
import {HomeService} from "./services/home/home.service";
import { BlogComponent } from './component/blog/blog.component';
import { BannerComponent } from './component/banner/banner.component';
import { BlogCardComponent } from './component/blog/blog-card/blog-card.component';
import { RecentBlogCardComponent } from './component/blog/recent-blog-card/recent-blog-card.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { CheckOutFormComponent } from './component/check-out/check-out-form/check-out-form.component';
import { CartTotalComponent } from './component/check-out/cart-total/cart-total.component';
import { PaymentComponent } from './component/check-out/payment/payment.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CartComponent,
        ListcartComponent,
        CarouselComponent,
        HomeComponent,
        SupprotComponent,
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
  ],
  providers: [
      MDBSpinningPreloader,
      HomeService
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
