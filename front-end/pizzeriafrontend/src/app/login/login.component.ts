import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm:FormGroup;
  public FormData;
  public message:String=" ";

  constructor(private loginService : LoginService, private router: Router) {
    this.LoginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.maxLength(15)])
    });
   }

  ngOnInit(): void {
  }

  Login(){
    this.FormData = JSON.stringify(this.LoginForm.value);
    console.log("Login Details are : "+ this.FormData);
    this.loginService.userLogin(this.FormData).subscribe((data)=>{
      console.log(data)
      console.log("message : "+data.message)
      if(data.message == "Invalid"){
        console.log("Invalid Username")
        this.message= "Invalid Username or Password"
      }else if(data.message == "Success"){
        console.log("message : "+data.message);
        this.message = "Login SuccessFull...,"
        this.router.navigate(['home'])
      }else{
        this.message="Something went wrong please try again..."
      }
    })
  }

}
