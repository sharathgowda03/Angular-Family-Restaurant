import { Component, HostListener, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  prodName: string = '';
  prodDescription: string = '';
  prodPrice: number | undefined;
  prodAvail: boolean | undefined;
  products: Product[] = [];
  ngOnInit(): void { }
  addProduct() {
    if (this.prodName && this.prodDescription && this.prodPrice && this.prodAvail) {
      this.productData.addProducts({
        prodName: this.prodName,
        prodDescription: this.prodDescription,
        prodPrice: this.prodPrice,
        prodAvail: this.prodAvail,
      });
      this.prodName = '';
      this.prodDescription = '';
      this.prodPrice = 0;
      this.prodAvail = false;
    } else {
      alert('Please fill in all product details.');
    }
  }
  finish() {
    this.router.navigate(['/productList']);
  }
  userName: string = '';
  constructor(
    private router: Router,
    private productData: ProductsDataService) {
    this.userName = productData.userName;
    this.products = this.productData.getProducts();
  }


  
  search:any[]=[];
  itemPerPage: number = 10;
  items: string[] = [];

  loadItems() {
    for (let i = 0; i < this.itemPerPage; i++) {
      this.items.push(`Items of ${this.items.length + 1}`);
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadItems();
    }
  }
}

