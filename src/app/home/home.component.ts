import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {

  userName: string = '';
  password:string='';
  constructor(
    private router: Router,
    private productData: ProductsDataService) { 
      this.userName=productData.userName;
    }

  ngOnInit() { }
  // submitText() {
  //   this.productData.userName = this.userName;
  //   this.router.navigate(['/payment'])
  // }


}
