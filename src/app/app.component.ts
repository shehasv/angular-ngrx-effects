import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplicationFacade } from './state/application.facade';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  

  counter:any;

  constructor(private facade:ApplicationFacade){}

  ngOnInit(): void {
    this.facade.getCounterValue$.pipe().subscribe((res)=>{
      this.counter = res
    })
  }


  increment():void {
    this.facade.incrementCount();
  }

  decrement():void{
    this.facade.decrementCounter();
  }

  reset():void{
    this.facade.resetCounter();
  }

}
