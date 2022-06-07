import { fadeIn } from './animations';
import { Component, Input, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations:[fadeIn]
})
export class PopupComponent implements OnInit {
   @Input('show-message') isShowMessage = false;
   @Input('state') state=false;
   @Input('message')message="";
   @Input('title')title="";
   @Input('color')color="black";
   @Input('background-color')backgroundColor="white";
   @Input("border") border="1px solid black";
  constructor() { }

  ngOnInit(): void {
  }
  
  getState():string
  {
    return this.state ? "open" : "closed";
  }

  toggleShowMessage()
  {
    
    this.state=!this.state;
    /*if(this.state)
    {*/
      this.isShowMessage = !this.isShowMessage;
    /*}
    else
    {
      setTimeout(() => {
        this.isShowMessage = this.state;
      }, 500);
    }*/
    console.log(this.getState());
  }
}
