import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './login/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';
import { BookingTableInvoiceComponent } from './booking-table-invoice/booking-table-invoice.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { TravelInformationComponent } from './travel-information/travel-information.component';
import { HomeModule } from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { ContactSucessPageComponent } from './contact-sucess-page/contact-sucess-page.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessMessageDialogComponentComponent } from './success-message-dialog-component/success-message-dialog-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    MenuComponent,
    PaymentComponent,
    ProductComponent,
    ProductListComponent,
    BookingTableComponent,
    OrderonlineComponent,
    MenuSelectionComponent,
    PlaceorderComponent,
    PaymentInvoiceComponent,
    BookingTableInvoiceComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    ProductPagesComponent,
    TravelInformationComponent,
    AuthComponent,
    Auth2Component,
    ContactSucessPageComponent,
    MainHomeComponent,
    SignInComponent,
    SignUpComponent,
    HomeImageComponent,
    SuccessMessageDialogComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
