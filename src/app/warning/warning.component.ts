import { Component } from "@angular/core";


@Component( {
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css'],
})

export class WarningComponent {
    constructor() {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}