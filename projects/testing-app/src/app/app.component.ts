import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = "testing-app lakjdfñlkj ñalkdjf ñlkjadfñ lkjadfñ lkjadsfñl kjadsf ñlkjadsf ñlkajdsfñ lkjasdf ñlkajdsfñ lkajsdf ñlkjadsf ñlkajdsf ñlkajdsf ñlkjadsf ñlkjadsf ñlkajdf ñlkajdsf ñlkajds fñlkjadf";
    constructor () {
        console.log("Hello world");
        console.log("Hello world again");
    }
}