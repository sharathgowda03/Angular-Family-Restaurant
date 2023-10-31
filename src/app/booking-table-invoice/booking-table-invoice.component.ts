import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsDataService } from '../products-data.service';
@Component({
  selector: 'app-booking-table-invoice',
  templateUrl: './booking-table-invoice.component.html',
  styleUrls: ['./booking-table-invoice.component.css']
})
export class BookingTableInvoiceComponent implements OnInit {
  date: string = '';
  time: string = '';
  persons!: number;
  nameOfBooking: string = '';
  email: string = ''; 
  mobile!: number;
  comments: string = '';
  constructor(private router: Router, private productData: ProductsDataService) {
     this.date=this.productData.date; 
     this.time= this.productData.time ;
     this.persons=this.productData.persons;
     this.nameOfBooking=this.productData.nameOfBooking ;
     this.email=this.productData.email;
     this.mobile=this.productData.mobile;
     this.comments=this.productData.comments;
  }
  ngOnInit() {}



}
