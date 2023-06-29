import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  onInput(event: Event){

    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(event: Event){

    this.title = "Ho cliccato sul bottone"
  }
}

