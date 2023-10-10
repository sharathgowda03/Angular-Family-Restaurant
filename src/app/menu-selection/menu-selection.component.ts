import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.css']
})
export class MenuSelectionComponent {
  selectedMenu: string = '';
  showSuccessMessage: boolean = false;
  constructor(
    private router: Router,
    private productData: ProductsDataService) { }
  ngOnInit() { }
  showSuccess() {
    if (this.selectedMenu ) {
      this.showSuccessMessage = true;
      this.productData.userName = this.selectedMenu;
      this.router.navigate(['/placedOrder'])
    }
}

}
