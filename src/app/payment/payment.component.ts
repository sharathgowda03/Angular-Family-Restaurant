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
  billingAddress = '';
  card = '';
  expiry = '';
  cvv = '';
  selectedOption: string = '';
  cardType: string = '';
 isValid = this.isNameValid(this.name);

  constructor(private productData: ProductsDataService,
    private router: Router,) { }

  onSubmit() {
    if (this.name==null) {
      window.alert("Please enter a name.");
    } else if (!this.billingAddress) {
      window.alert("Please enter a billing address.");
    } else if (!this.cardType) {
      window.alert("Please select a card type.");
    } else if (!this.selectedOption) {
      window.alert("Please select an option.");
    } else {
      this.productData.name = this.name;
      this.productData.billingAddress = this.billingAddress;
      this.productData.cardType = this.cardType;
      this.productData.selectedOption = this.selectedOption;
      this.router.navigate(['/paymentInvoice']);
    }
  }
  isNameValid(name: string): boolean {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
  }
}
