import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  buildList = []

  totalList: any = [];
  totalCost = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getBuildList().subscribe(data => {
      this.buildList = data;
    })
  }


  total(event, item) {
    const checked = event.target.checked;
    if (checked) {
      this.totalList.push(item);
      console.log(this.totalList);
      this.totalCost += item.price;
    } else {
      let index = 0;
      this.totalList.forEach((element) => {
        if (element.id === item.id) {
          this.totalList.splice(index, 1);
        }
        index++;
      });
      console.log(this.totalList);
      this.totalCost -= item.price;
    }
  }


  // total(item){
  //   let cost={
  //     price:item.price
  //   }
  //   this.totalList.push(cost);
  //   // console.log(this.totalList)
  //   let total = 0;
  //   for(let data of this.totalList){
  //     total += data.price;
  //     // console.log(data.price)
  //   }
  //   console.log(total);
  //   this.totalCost = total;
  //   return this.totalCost;
  // }



  // totalPrice() {
  //   let total = this.totalCost;
  //   for(let data of this.totalList){
  //     total += data.price;
  //   }
  //   return this.totalCost;
  // }

  // submit(){
  //   let total = 0;
  //   for(let data of this.totalList){
  //     total += data.price;
  //     // console.log(data.price)
  //   }
  //   console.log(total);
  //   this.totalCost = total;
  //   return this.totalCost;
  // }

}
