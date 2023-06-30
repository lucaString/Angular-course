import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {

   }

   @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore('yellow')

   }
   @HostListener('mouseleave') onMouseleave() {
    this.cambiaColore('red')
   }

   cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore
   } 

}
