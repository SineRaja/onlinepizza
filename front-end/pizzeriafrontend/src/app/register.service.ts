import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:3000/user/register";
  public userData;

  constructor(private httpClient: HttpClient) { }

  userRegister(data): any {
    this.userData = JSON.parse(data);
    console.log("recieved data :: "+ this.userData)

    return this.httpClient.post(this.url,this.userData);
  }
  
}
