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

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {path:'home',component:HomeComponent},
  {path: '', component: CartComponent},
  {path:'bookingTable',component:BookingTableComponent},
  {path:'OrderOnline',component:OrderonlineComponent},
  {path:'MenuSelection',component:MenuSelectionComponent},
  {path:'payment',component:PaymentComponent},
  {path:'paymentInvoice',component:PaymentInvoiceComponent},
  {path:'bookingTableSucess',component:BookingTableInvoiceComponent},
  {path:'Services',component:ServicesComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'login',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
