import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {
  apiUrl = 'https://plg.xyz/api/web/events';
  constructor(private http :HttpClient) { }
  events(){
    return this.http.get(this.apiUrl);
  }
}
