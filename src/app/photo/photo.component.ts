import { animated } from './animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations:[animated]
})
export class PhotoComponent implements OnInit {
  state="default";
  constructor() { }

  ngOnInit(): void {
  }
  setState(state:string){
    this.state=state;
    console.log(state);
    
  }
}
