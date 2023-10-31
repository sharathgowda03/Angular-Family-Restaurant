import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './login/cart.component';
import { ProductComponent } from './product/product.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { MenuComponent } from './menu/menu.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { authGuard } from './auth.guard';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';
import { BookingTableInvoiceComponent } from './booking-table-invoice/booking-table-invoice.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPagesComponent } from './product-pages/product-pages.component';
import { TravelInformationComponent } from './travel-information/travel-information.component';
import { ContactSucessPageComponent } from './contact-sucess-page/contact-sucess-page.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-home', pathMatch: 'full' },
  {path:'main-home',component:MainHomeComponent},
  {path:'SignUp',component:SignUpComponent},
  { path: 'bookingTable', component: BookingTableComponent },
  { path: 'OrderOnline', component: OrderonlineComponent },
  { path: 'MenuSelection', component: MenuSelectionComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'paymentInvoice', component: PaymentInvoiceComponent },
  { path: 'bookingTableSucess', component: BookingTableInvoiceComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Login', component: CartComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productList', component: ProductListComponent },
  {path:'contactSucessPage',component:ContactSucessPageComponent},
  { path: 'productPages', component: ProductPagesComponent },
  { path: 'travelInformation', component: TravelInformationComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(data => data.HomeModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(data => data.ProductModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
