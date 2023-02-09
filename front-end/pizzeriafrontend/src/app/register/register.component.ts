import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public RegisterForm:FormGroup;
  public FormData;
  public message;
  public message1;

  constructor(private registerService : RegisterService) { 
    this.RegisterForm = new FormGroup({
      username: new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required, Validators.maxLength(15)])
    });
  }

  ngOnInit(): void {
  }

  Register(){
    this.FormData = JSON.stringify(this.RegisterForm.value);
    console.log("Login Details are :: "+ this.FormData);

    this.registerService.userRegister(this.FormData).subscribe((data)=>{

      console.log(data)
      console.log("Message :" +data.message)

      if(data.message == "Duplicate"){
        this.message = "Username already exists"
      }
      else if(data.message == "Success"){
        this.message1 = "Register Successfully"
      }
      else{
        this.message = "Something went wrong please try again"
      }
      console.log("message :: " + this.message)
    })
  }

}
