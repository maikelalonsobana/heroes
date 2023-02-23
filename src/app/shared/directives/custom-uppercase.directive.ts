import { Directive, HostListener } from '@angular/core';

/***
 ** Contiene una directiva que permite transformar el texto a mayúsculas donde se utilice
 ***/
@Directive({
  selector: 'input[appCustomUppercase]',
})
export class CustomUppercaseDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    //console.log('event onInput ', event);
    if (event && event.target && event.target instanceof HTMLInputElement) {
      //console.log('event onInput estoy dentro ', event);
      event.target.value = event.target.value.toUpperCase();
    }
  }
}
