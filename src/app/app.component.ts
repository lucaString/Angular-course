import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  isVisible = true

  numero = 3;

  persone = [
    {nome: "Luca", cognome: "String", isOnline: true},
    {nome: "Marco", cognome: "Array", isOnline: false},
    {nome: "Andrea", cognome: "Boolean", isOnline: false},
    {nome: "Billy", cognome: "Variable", isOnline: true},
    {nome: "Jon", cognome: "Object", isOnline: false},
  ]

  onInput(event: Event){

    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(event: Event){

    this.title = "Ho cliccato sul bottone"
  }

}

