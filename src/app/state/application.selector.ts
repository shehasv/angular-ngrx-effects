import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplicationState, APPLICATION_FEATURE_KEY } from "./application.reducer";

const getApplicationState = createFeatureSelector<ApplicationState>(
    APPLICATION_FEATURE_KEY
)

const getCounter = createSelector(
    getApplicationState,
    (state:ApplicationState) => {
        return state ? state.counter : null
    }
)

const getUsers= createSelector(
    getApplicationState,
    (state:ApplicationState) => {
        return state ? state.users : null
    }
)

export const ApplicationQuery = {
    getCounter,
    getUsers
}