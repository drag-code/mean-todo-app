import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss']
})

export class NameComponent {
    name = "";
    constructor() { 
        this.name = "Esteban Alexis";
    }
    
    changeToUpper() {
        this.name = this.name.toUpperCase();
    }

    changeToLower() {
        this.name = this.name.toLowerCase();
    }

    reset() {
        this.name = "Esteban Alexis";
    }
}