import { Component } from "@angular/core";


@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})

export class SuccessComponent {
    constructor() {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }


    onDisplay($event: any) {
        console.log($event);
    }
}