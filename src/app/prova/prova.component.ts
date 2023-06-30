import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent
  implements
    OnInit
{
  // immage1 = `https://images.unsplash.com/photo-1610575828349-43f195e95452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80`
  // immage2 = `https://material.angular.io/assets/img/examples/shiba2.jpg`
  // isDisabled = false
  // cani = [
  //   {
  //     nome: 'Roger',
  //     razza: 'Goldenretriver',
  //     descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog 
  //     from Japan. A small, agile dog that copes very well withmountainous terrain, the Shiba Inu was 
  //     originally bred for hunting.`,
  //   }
  // ];

  @Input() data: any;

  constructor() {
    console.log('costruttore');
  }
  

  ngOnInit(): void {
    console.log(this.data);

  }
}
