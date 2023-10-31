import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsDataService } from '../products-data.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  currentPage = 1;
  pageSize = 10;

  constructor(private productData: ProductsDataService,private productService: ProductService) {
    this.products = this.productData.getProducts();
  }
  ngOnInit() {
    this.loadProducts(this.currentPage);
  }

  loadProducts(page: number) {
    this.products = this.productService.getProducts(page, this.pageSize);
  }
  getPages(): number[] {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, index) => index + 1);
  }
  
  totalPages(): number {
    return Math.ceil(this.productService.products.length / this.pageSize);
  }
  
}
