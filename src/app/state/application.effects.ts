import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { UserService } from "../user.service";
import * as ApplicationActions from './application.actions'

@Injectable()


export class ApplicationEffects{
    constructor(private actions$: Actions,private userService:UserService){}


    loadUsers$ : Observable<ApplicationActions.LoadUsers | 
    ApplicationActions.LoadUsersSuccess | 
    ApplicationActions.LoadUsersFailure > = createEffect(() => 
        this.actions$.pipe(
            ofType<ApplicationActions.LoadUsers>(
                ApplicationActions.ApplicationActionTypes.LOAD_USERS
            ),
            switchMap((action: ApplicationActions.LoadUsers) => 
                this.userService.getUsersData().pipe(
                    map((res) => {
                        return new ApplicationActions.LoadUsersSuccess(res)
                    })
                )
            ),catchError(() => of(new ApplicationActions.LoadUsersFailure()))
        )
    )
}