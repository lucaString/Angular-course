import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  persone = [
    {nome: "Luca", cognome: "String", isOnline: true, color: 'blue'},
    {nome: "Marco", cognome: "Array", isOnline: false, color: 'red'},
    {nome: "Andrea", cognome: "Boolean", isOnline: false, color: 'green'},
    {nome: "Billy", cognome: "Variable", isOnline: true, color: 'yellow'},
    {nome: "Jon", cognome: "Object", isOnline: false, color: 'purple'},
  ]
  
  constructor() { }
}
