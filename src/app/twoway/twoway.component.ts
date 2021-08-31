import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  
  inputName: string = 'lswn';

  exerInput: string = '';
  showOrNot: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any) {
    console.log(event);
    this.inputName = event?.target.value;
    console.log(event?.target.value);
  }

  onClick() {
    console.log('click~~');
    
    setTimeout(() => { 
      this.showOrNot = true;  // 이걸 왜 앞에 둬야만 하지? inputname= '' 되어버리면 비활성화되자나
    }, 2000,
    )
    this.inputName = '';
  }
}

