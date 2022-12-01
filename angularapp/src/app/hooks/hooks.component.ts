import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
@Input() userid: number;
  constructor() {
    console.log("HooksComponent constructor called");

   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent constructor called");

    for (const propname in changes) {
      const prop = changes[propname];

      const {previousValue, currentValue, firstChange} = prop;
        
      console.log(`Prop name${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);

      }
    console.log("-----------------------------------------------");
    

  
  }

// hooks
  ngOnInit() {
    console.log("HooksComponent ngOnInit called");
    
  }

}
