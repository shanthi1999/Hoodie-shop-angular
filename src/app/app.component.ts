import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:'sample';
 foodlist:any[];

 constructor(){

 this.foodlist = [
   {
   "name":"shanthi",
   },
   
   {
   "name":"shakthi",
   }
  ];
  
}

}
