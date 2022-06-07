import { animated, slider, stepper } from './simpsons/animations';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',

],
  animations: [animated, slider,stepper]
})
export class AppComponent {
  title = 'animations';
  showMessage=false;
  state = false;
  toggleShowMessage(){
    this.state = !this.state;

   if(this.state)
     this.showMessage = this.state;
    else
      setTimeout(() => {
        this.showMessage = this.state;
      }, 500);
  }

  prepereRoute(outlet:RouterOutlet)
  {
     return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
