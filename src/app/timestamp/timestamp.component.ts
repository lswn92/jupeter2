import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {
  
  showOrNot:boolean = true;
  // timeStamps: Array<Date> = [];
  timeStamps: Date[] = [];    // 초기화를 하지 않으면 오류가 발생함

  // timeStamps: number[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.showOrNot = !this.showOrNot;

    let myDate: Date = new Date();
    this.timeStamps.push(myDate);
    console.log(this.timeStamps);

    // this.timeStamps.push(event.timeStamps);
    // console.log(this.timeStamps);
  }
}
