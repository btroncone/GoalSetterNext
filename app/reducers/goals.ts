import { Action, Reducer, Store } from '@ngrx/store';
import { 
    Goal,
    LOADED_GOALS,
    LOADING_GOALS,
    UPDATED_GOALS,
    UPDATING_GOALS
} from '../models/goals';
 
let initialState = {
    loading: false,
    goals: []
};
 
export const goals : Reducer<any> = (state = initialState, action : Action) => {
    switch(action.type){
        case LOADING_GOALS:
        case UPDATING_GOALS:
            return Object.assign(state, {loading : true});
        case LOADED_GOALS:
            return{
                goals: action.payload, 
                loading: false
            };
        case UPDATED_GOALS:
            return{
                goals: action.payload,
                loading: false
            };
        default:
            return state;
    }
}; 