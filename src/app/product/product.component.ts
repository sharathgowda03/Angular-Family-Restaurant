import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
userName:string='';
constructor(private productData:ProductsDataService){
  this.userName=this.productData.userName;
}
// product.model.ts



}
