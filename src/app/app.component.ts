import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  persone = [
    {nome: "Luca", cognome: "String", isOnline: true, color: 'blue'},
    {nome: "Marco", cognome: "Array", isOnline: false, color: 'red'},
    {nome: "Andrea", cognome: "Boolean", isOnline: false, color: 'green'},
    {nome: "Billy", cognome: "Variable", isOnline: true, color: 'yellow'},
    {nome: "Jon", cognome: "Object", isOnline: false, color: 'purple'},
  ]

  onRiceviDati(value: string) {
    console.log(value)
  }

  // isVisible = true

  // numero = 3;

  onInput(event: Event){

    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(event: Event){

    this.title = "Ho cliccato sul bottone"
  }

}

