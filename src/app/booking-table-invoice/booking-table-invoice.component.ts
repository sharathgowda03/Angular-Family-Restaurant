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
    this.productData.date = this.date;
    this.productData.time = this.time;
    this.productData.persons = this.persons;
    this.productData.nameOfBooking = this.nameOfBooking;
    this.productData.email = this.email;
    this.productData.mobile = this.mobile;
    this.productData.comments = this.comments;
  }
  ngOnInit() {}



}
