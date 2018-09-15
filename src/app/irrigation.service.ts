import { Injectable } from '@angular/core';
import { Irrigation } from './irrigation';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Basic bWljaGFsLmh1c2FrOlRyYWZfZnJ1bjQ=' })
};

@Injectable({
  providedIn: 'root'
})
export class IrrigationService {

  //private URL = 'http://192.168.1.8:7999';
  private URL = 'http://chopinstrasse.hopto.org:7999';
  //private URL = 'http://private-516851-irrigation1.apiary-mock.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.URL + '/all', httpOptions);
  }

  togglePump(): Observable<any> {
    return this.http.put<any>(this.URL + '/pump', null, httpOptions);
  }

  toggleValve(): Observable<any> {
    return this.http.put<any>(this.URL + '/valve', null, httpOptions);
  }

}
