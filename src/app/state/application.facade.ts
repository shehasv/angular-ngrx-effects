import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as ApplicationActions from './application.actions';
import { ApplicationQuery } from "./application.selector";

@Injectable({
    providedIn: 'root'
})

export class ApplicationFacade {


    public getCounterValue$:Observable<any>;
    public getUsers$:Observable<any>;

    constructor(private store:Store){
        this.getCounterValue$ = this.store.pipe(
            select(ApplicationQuery.getCounter)
        )
        this.getUsers$ = this.store.pipe(
            select(ApplicationQuery.getUsers)
        )
    }


    incrementCount(){
        this.store.dispatch(new ApplicationActions.IncrementCounter)
    }

    decrementCounter(){
        this.store.dispatch(new ApplicationActions.DecrementCounter)
    }

    resetCounter(){
        this.store.dispatch(new ApplicationActions.ResettCounter)
    }

    loadUsersData(){
        this.store.dispatch(new ApplicationActions.LoadUsers)
    }

}

