import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  
  title = 'angular';
  @ViewChild('inputSaluti') inputSaluti!: ElementRef

  colore = '';

  constructor(private servizioProva: ServizioProvaService) {}

  cambiaColoreEvidenziatore(colore: string) {
    this.colore = colore
  }

  // persone = [
  //   {nome: "Luca", cognome: "String", isOnline: true, color: 'blue'},
  //   {nome: "Marco", cognome: "Array", isOnline: false, color: 'red'},
  //   {nome: "Andrea", cognome: "Boolean", isOnline: false, color: 'green'},
  //   {nome: "Billy", cognome: "Variable", isOnline: true, color: 'yellow'},
  //   {nome: "Jon", cognome: "Object", isOnline: false, color: 'purple'},
  // ]

  ngOnInit(): void {
    // console.log('OnInit');
    // console.log(this.inputSaluti);
    console.log('appcomponent', this.servizioProva.persone);
  }

  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked');
    // console.log(this.inputSaluti);
  }

  onRiceviDati(value: string) {
    // console.log(value)
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
