import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers',
  template: `
  <p>I'm Servers</p>
  <app-server></app-server>`,
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
