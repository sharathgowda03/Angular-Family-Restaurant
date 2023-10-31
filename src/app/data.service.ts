import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private successMessageSource = new BehaviorSubject<string>('');
  successMessage$ = this.successMessageSource.asObservable();

  setSuccessMessage(message: string) {
    this.successMessageSource.next(message);
  }
  //POST
  // private apiUrl ="https://reqres.in/api/users/2";
  // postData(data: any): Observable<any> {
  //   return this.http.post(this.apiUrl, data);
  // }

  ////////////////////////////////////////////////POST/////

  //Get All
  // private url3: string = 'https://reqres.in/api/users?page=2';

  // getUsers():Observable<any>{

  //   return this.http.get<any>(this.url3);

  // }

  /////////////////////////////////////////Get All///////////////////////////
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // private data:any[]=[
  //   {'Departure':'Davangere','Arrival':'Banglore','is_available':true},
  //   {'Departure':'Banglore','Arrival':'Hubli','is_available':false},
  //   {'Departure':'Mysore','Arrival':'Manglore','is_available':true}
  // ]
  // getJsonData(): any[] {
  //   return this.data;
  // }

  // fetchData(): Observable<any> {
  //   return this.http.get('https://reqres.in/api/users?page=2');
  // }

  private apiUrl = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) {}

  getPosts(): Promise<any[]> {
    return this.http.get<any>(`${this.apiUrl}`)
      .toPromise()
      .then((response: any) => response.data || []);
  }

  getPostById(id: number): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}`)
      .toPromise()
      .then((response: any) => response.data || {});
  }
}
