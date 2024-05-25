import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  h2Title="hello";
  html="my name is abhi";
  title = 'app_01';
  buttonClicked(ev:any){
    alert("you clicked me");
  }
  ifmouseOver=false;
  mouseOver(ev:any){
    console.log(ev);
    this.ifmouseOver=true;
  }
  mouseOut(ev:any){
    this.ifmouseOver=false;
  }
   stdArr = [{
    name : "Abhishek",
    gender :"M",
    dob :"31/08/1999",
    address :"Satara"
  },{
    name :"ganesh",
    gender :"Male",
    dob :"25.12.1999",
    address :"bangladesh"
  }];
}
