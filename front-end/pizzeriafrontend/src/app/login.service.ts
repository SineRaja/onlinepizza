import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:3000/user/login";
  public userData;

  constructor(private httpClient: HttpClient) { }

  userLogin(data): any {
    this.userData = JSON.parse(data);
    console.log("User Data "+this.userData);
    return this.httpClient.post(this.url,this.userData);
  }
}
