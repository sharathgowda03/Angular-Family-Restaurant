import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsDataService } from '../products-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent{
  data: []=[]; 
  constructor(private DataService:DataService){}
  // currentPage = 1;

  // itemsPerPage = 3;

 

  // get paginatedList() {

  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;

  //   const endIndex = startIndex + this.itemsPerPage;

  //   return this.list.slice(startIndex, endIndex);

  // }

 

  // nextPage() {

  //   if (this.currentPage < this.totalPages) {

  //     this.currentPage++;

  //   }

  // }

 

  // prevPage() {

  //   if (this.currentPage > 1) {

  //     this.currentPage--;

  //   }

  // }

 

  // get totalPages() {

  //   return Math.ceil(this.list.length / this.itemsPerPage);

  // }

 
  /////////////////////////////////////save data///////////////////////////////
  // saveData() {
  //   const data = {
  //     name: this.name,
  //     job: this.job
  //   };

  //   this.dataService.postData(data).subscribe(
  //     (response) => {
  //       console.log('Data saved successfully', response);
  //     },
  //     (error) => {
  //       console.error('Error saving data', error);
  //     }
  //   );
  // }

  /////////////////////////////////////////get data////////////////////////
  //   ngOnInit() {
  //     this.DataService.getData().subscribe((info)=>{
  //       this.data= Object.entries(info);
  //       this.data=this.data[0][1];
  //       this.data = Object.entries(this.data);
  //       console.log(" INFO FROM the API", this.data)
  //     })
  // }
}

  ///////////////////////////////////////get ALL /////////////////////////////////////////////////////

//   list = new Array();
//   users: any;
//   ngOnInit(): void {
//     this.DataService.getUsers().subscribe((data) => {
//       const value = Object.values(data);
//       console.log(data);
//       console.log(value);
//       console.log('value', value);
//       const users = value[4];
//       this.users = users;
//       console.log('users', users);
//       this.list = Object.keys(data['data']).map((key) => data['data'][key]);
//       console.log('Users2 Approach 2 ', this.list);
//     });
//   }
// }
