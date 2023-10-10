import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  userName: string = '';
  name: string = '';
  billingAddress: string = '';
  
  date: string = '';
  time: string = '';
  persons!: number;
  nameOfBooking: string = '';
  email: string = '';
  mobile!: number;
  comments: string = '';

  sendData(date: string, time: string, persons: number, nameOfBooking: string, email: string, mobile: number, comments: string) {
    this.date = this.date;
    this.time = time;
    this.persons = persons;
    this.nameOfBooking = nameOfBooking;
    this.email = email;
    this.mobile = mobile;
    this.comments = comments;
  }

  recieveData() {
    console.log(this.billingAddress,
      this.date,
      this.persons,
      this.nameOfBooking,
      this.email,
      this.mobile,
      this.comments)
  }

  constructor() { }
}
