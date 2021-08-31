import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swbtn',
  templateUrl: './swbtn.component.html',
  styleUrls: ['./swbtn.component.css']
})
export class SwbtnComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  onSuccess() {
    // 이건 앵귤러 문제야? typescript 문제야?
    let tag = document.getElementById('success') as HTMLElement;
    tag.hidden = false;
  }
  onWarning() {
    let tag = document.getElementById('warning') as HTMLElement;
    tag.hidden = false;
  }
}
