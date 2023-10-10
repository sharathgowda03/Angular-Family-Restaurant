import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  name: string = '';
  billingAddress='';
  card='';
  expiry='';
  cvv='';

  constructor(private productData: ProductsDataService,
    private router: Router,) {}

  onSubmit() {
    this.productData.name = this.name;
    this.productData.billingAddress=this.billingAddress;
    this.router.navigate(['/paymentInvoice']);
    console.log(this.billingAddress);
  }
}
