import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private products:any[]=[];
  addProducts(product:any){
    this.products.push(product);
  }
  getProducts(){
    return this.products;
  }


//Home page field
  userName: string = '';

//payment for placing the order fields 
  selectedOption:string='';
  cardType:string='';
  name: string = '';
  billingAddress: string = '';

  //booking table invoice feilds
  date: string = '';
  time: string = '';
  persons!: number;
  nameOfBooking: string = '';
  email: string = '';
  mobile!: number;
  comments: string = '';

  constructor() { }
}
