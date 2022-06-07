import { BrowserModule } from '@angular/platform-browser';
import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('open', style({ transform:'translateY(-50px)',height:'40px'})),
  state('closed', style({ height:'0px'})),
    transition('* => open',[
        style({height:'0px'}),
      animate('0.5s ease-in', style({ transform:'translateY(-50px)',height:'40px' }))
    ]),
    transition('open => closed',[
        style({height:'40px'}),
      animate('0.5s ease-out', style({  transform:'translateY(0px)',height:'0px' }))
    ])
])