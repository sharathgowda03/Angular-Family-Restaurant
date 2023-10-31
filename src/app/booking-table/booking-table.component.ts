import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent {
  date: string = '';
  time: string = '';
  persons!: number;
  nameOfBooking: string = '';
  email: string = '';
  mobile!: number;
  comments: string = '';

  constructor(private router: Router, private productData: ProductsDataService) { }
  // formData: any = {};
  // onSubmit() {
  //   console.log(this.formData);
  // }
  // isSubmitted: boolean = false
  onSubmitted() {
    this.productData.date=this.date;
    this.productData.time=this.time;
    this.productData.persons=this.persons;
    this.productData.nameOfBooking=this.nameOfBooking;
    this.productData.email=this.email;
    this.productData.mobile=this.mobile;
    this.productData.comments=this.comments;
    this.router.navigate(['/bookingTableSucess'])
    // this.productData.recieveData();

    // this.isSubmitted = true;
    
  }
}
