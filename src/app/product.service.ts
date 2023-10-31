import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.products.push({ id: i, name: `Product ${i}`, price: 10 + i });
    }
  }

  getProducts(page: number, pageSize: number) {
    const startIndex = (page - 1) * pageSize;
    return this.products.slice(startIndex, startIndex + pageSize);
  }
}


