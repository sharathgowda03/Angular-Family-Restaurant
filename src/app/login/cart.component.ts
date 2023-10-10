import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  userName: string = '';
  password: string = '';
  showSuccessMessage: boolean = false;
  constructor(
    private router: Router,
    private productData: ProductsDataService) { }
  ngOnInit() { }
  showSuccess() {
    if (this.userName && this.password) {
      this.showSuccessMessage = true;
      this.productData.userName = this.userName;
    this.router.navigate(['/home'])
    }
  }
  

  
  

}
