import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jupeter2';
  text: string = '테스트입니다';

  myButtonProperty: boolean = false;
  Wolverine: string = "Mr. Wol";


  methodTest() {
    return "methodTest";
  }

  
  onExerciseKeyUp(event: any) {
    console.log("문제 5");
  }

}
