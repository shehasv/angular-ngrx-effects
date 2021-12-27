import { ApplicationAction, ApplicationActionTypes } from "./application.actions"


export const APPLICATION_FEATURE_KEY = 'application';

export interface ApplicationState {
    counter:number,
    users: any[]
}

export const applicationInitialState: ApplicationState = {
    counter : 0,
    users: []
}

export function applicationReducer(state:ApplicationState = applicationInitialState,action:ApplicationAction) :ApplicationState {

    switch(action.type){
        case ApplicationActionTypes.INCREMENT_COUNTER : {
            return {
                ...state,
                counter: state.counter + 1
            }
        }

        case ApplicationActionTypes.DECREMENT_COUNTER : {
            return {
                ...state,
                counter: state.counter - 1
            }
        }

        case ApplicationActionTypes.RESET_COUNTER : {
            return {
                ...state,
                counter: 0
            }
        }

        case ApplicationActionTypes.LOAD_USERS_SUCCESS : {
            return {
                ...state,
                users : action.payload
            }
        }

        default:
            return state;
    }
}
