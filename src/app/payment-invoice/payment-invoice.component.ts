import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-payment-invoice',
  templateUrl: './payment-invoice.component.html',
  styleUrls: ['./payment-invoice.component.css']
})
export class PaymentInvoiceComponent {
name:string='';
billingAddress:string='';
constructor(private router:Router,
  private productData:ProductsDataService){
    this.name=this.productData.name;
    this.billingAddress=this.productData.billingAddress;
  }
  ngOnInit(){}


}
