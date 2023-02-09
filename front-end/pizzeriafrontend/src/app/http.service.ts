import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getPizzaList(): Observable<any> {
      return this.httpClient.get("http://localhost:3000/pizza/list");
  }

  getBuildList(): Observable<any>{
      return this.httpClient.get("http://localhost:3000/build/data");
  }

}
