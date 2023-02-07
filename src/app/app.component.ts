import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = "hello world THIS IS TITLE"
  intervelSub:any;
  getMin(min: any, max:any){
    return min+max
  }
  ngOnInit() {
     this.intervelSub = setInterval(() =>{
      console.log("Hello from ngOnit")
     }, 1000)
  }
  ngOnDestroy() {
      if(this.intervelSub){
        clearInterval(this.intervelSub);
      }
  }
}
// https://www.youtube.com/watch?v=AAu8bjj6-UI I"M AT 12:05 ANGULAR