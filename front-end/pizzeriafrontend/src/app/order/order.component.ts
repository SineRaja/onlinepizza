import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  // toggle = true;
  // status = 'Order'; 
  pizzaList = []
  isInCart = true;
  cartData: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getPizzaList().subscribe(data => {
      this.pizzaList = data;
      console.log(data)
    })
  }

  actionMethod(event: any, piz) {
    event.target.disabled = true;
    alert("You Had Purchased " + piz.pizza_title + " as Cost of " + piz.price);
  }

  checkedItem(event, item) {
    let index = 0;
    this.cartData.forEach((element) => {
      if (element.id === item.id) {
        this.cartData.splice(index, 1);
      }
      index++;
    });

  }

  canceledItem(event) {
    if (event.target.isInCart === false) {
      this.isInCart = true;
    } else {
      this.isInCart = false;
    }

  }

  // checkedItem(){
  //   this.isInCart=true;
  // }

  // canceledItem(){
  //   this.isInCart=false;
  // }



  // changeColor(event: any) {
  //   // this.toggle = !this.toggle;
  //   // this.status = this.toggle ? 'Order' : 'Cancel';
  //   if(event.target.status === 'Order'){
  //     this.toggle = !this.toggle;
  //     this.status = 'Cancel';
  //   }else{
  //     this.toggle = !this.toggle;
  //     this.status = 'Order';
  //   }
  // }

}
