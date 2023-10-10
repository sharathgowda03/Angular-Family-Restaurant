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

const routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'payment',component:PaymentComponent}
]


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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
