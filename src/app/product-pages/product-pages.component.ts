import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css']
})
export class ProductPagesComponent {
  products: any[] = [];
  currentPage = 1;
  pageSize = 10;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.loadProducts(this.currentPage);
  }
  loadProducts(page: number) {
    if (page < 1) {
      page = 1;
    }
    if (page > this.totalPages()) {
      page = this.totalPages();
    }
    this.currentPage = page;
    this.products = this.productService.getProducts(this.currentPage, this.pageSize);
  }
  getPages(): number[] {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, index) => index + 1);
  }
  totalPages(): number {
    return Math.ceil(this.productService.products.length / this.pageSize);
  }
  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  private cartItems: any[] = [];

  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
  product: any[] = [
    {
      name: 'Product 1',
      imageUrl: '../../assets/biriyani.jpeg'
    }
  ]
}
