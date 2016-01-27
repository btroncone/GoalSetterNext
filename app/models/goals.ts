import { Injectable } from 'angular2/core';
import { Action, Reducer, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import { GoalService } from '../services/goal-service';

export const LOAD_GOALS = 'LOAD_GOALS';
export const LOADING_GOALS = 'LOADING_GOALS';
export const LOADED_GOALS = 'LOADED_GOALS';
export const UPDATE_GOALS = 'UPDATE_GOALS';
export const UPDATING_GOALS = 'UPDATING_GOALS';
export const UPDATED_GOALS = 'UPDATED_GOALS';

export interface Goal {
    description: string,
    status: boolean,
    date: string
}

@Injectable()
export class Goals{
    private actions$ = new BehaviorSubject<Action>({type: null, payload: null});
    
    constructor(private _store : Store<Goals>, private _goalService : GoalService){
        const $store = this._store.select<Goals>('goals');
        
        const loadGoals = this.actions$
            .filter(action => action.type === LOAD_GOALS)
            .do(() => _store.dispatch({type: LOADING_GOALS}))
            .mergeMap(action => _goalService.retrieveGoalsByDate(action.payload),
                (action, payload: Goal[]) => ({type: LOADED_GOALS, payload}));
        
        const updateGoals = this.actions$
            .filter(action => action.type === UPDATE_GOALS)
            .do(() => _store.dispatch({type: UPDATING_GOALS}))
            .mergeMap(action => _goalService.setGoals(action.payload),
                (action, payload: Goal[]) => ({type: UPDATED_GOALS, payload}));
                
        Observable
            .merge(loadGoals, updateGoals)
            .subscribe((action : Action) => _store.dispatch(action));
    }
    
    loadGoals(date : any){
        this.actions$.next({type: LOAD_GOALS, payload: date});
    }
    
    updateGoals(date : any, goals: Goal[]){
        this.actions$.next({type: UPDATE_GOALS, payload:{date, goals}})
    }
}