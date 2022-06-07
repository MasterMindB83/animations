import { BrowserModule } from '@angular/platform-browser';
import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';

export const animated = trigger('animated', [
  state('default', style({width:'400px' })),
  state('translate', style({ width:'400px',transform: 'translateX(100px)'})),
  state('rotate', style({ width:'400px',transform:'rotateY(180deg) rotateZ(90deg)'})),
  state('scale', style({ width:'600px'})),
  transition('* => translate', [
    animate('1s ease-in')
  ]),
  transition('* => rotate', [
    animate('1s ease-in')
  ]),
  transition('* => scale', [
    animate('1s ease-in')
  ]),
  transition('* => default', [
    animate('1s ease-in')
  ]),
])