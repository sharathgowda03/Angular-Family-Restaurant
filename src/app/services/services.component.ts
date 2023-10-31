import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable,Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  // data: any;
  // error: string | null | undefined;

  // constructor(private dataService: DataService) {}

  // fetchData() {
  //   this.dataService.fetchData()
  //     .subscribe(
  //       (response) => {
  //         this.data = response;
  //         this.error = null;
  //       },
  //       (error) => {
  //         this.data = null;
  //         this.error = 'An error occurred while fetching data: ' + error.message;
  //       }
  //     );
  // }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>observable>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  posts: any[] = [];
  post: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts()
      .then((data) => {
        this.posts = data;
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });

    this.dataService.getPostById(2)
      .then((data) => {
        this.post = data.data;
      })
      .catch((error) => {
        console.error('Error fetching post by ID:', error);
      });
  }
}
