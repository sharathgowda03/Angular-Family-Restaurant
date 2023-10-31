import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-travel-information',
  templateUrl: './travel-information.component.html',
  styleUrls: ['./travel-information.component.css']
})
export class TravelInformationComponent implements OnInit {

  data: any[] = [];
  constructor(private dataService: DataService) {
    // this.data = this.dataService.getJsonData();
  }
  ngOnInit(): void {
    // this.data = this.dataService.getJsonData();
  }
}
