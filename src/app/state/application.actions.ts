import { Action } from "@ngrx/store";

export enum ApplicationActionTypes {
    INCREMENT_COUNTER = '[Application Increment Counter]',
    DECREMENT_COUNTER = '[Application Decrement Counter]',
    RESET_COUNTER = '[Application Reset Counter]',
    LOAD_USERS = '[Application Load Users]',
    LOAD_USERS_SUCCESS = '[Application Load Users Success]',
    LOAD_USERS_FAILURE = '[Application Load Users Failure]',
}

export class IncrementCounter implements Action {
    readonly type = ApplicationActionTypes.INCREMENT_COUNTER;
    constructor(){}
}

export class DecrementCounter implements Action {
    readonly type = ApplicationActionTypes.DECREMENT_COUNTER;
    constructor(){}
}

export class ResettCounter implements Action {
    readonly type = ApplicationActionTypes.RESET_COUNTER;
    constructor(){}
}

export class LoadUsers implements Action {
    readonly type = ApplicationActionTypes.LOAD_USERS;
    constructor(){}
}

export class LoadUsersSuccess implements Action {
    readonly type = ApplicationActionTypes.LOAD_USERS_SUCCESS;
    constructor(public payload:any){}
}

export class LoadUsersFailure implements Action {
    readonly type = ApplicationActionTypes.LOAD_USERS_FAILURE;
    constructor(){}
}
export type ApplicationAction = IncrementCounter | DecrementCounter | ResettCounter | LoadUsers | LoadUsersSuccess | LoadUsersFailure;

export const fromApplicationActions = {
    IncrementCounter,
    DecrementCounter,
    ResettCounter,
    LoadUsers,
    LoadUsersSuccess,
    LoadUsersFailure
}