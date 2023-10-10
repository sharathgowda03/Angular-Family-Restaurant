import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {
  selectedMenu: string = '';
  constructor(
    private router: Router,
    private productData: ProductsDataService) { 
    }

  ngOnInit() { }
  submitText() {
    this.productData.userName = this.selectedMenu;
    this.router.navigate(['/placedOrder'])
  }
}
