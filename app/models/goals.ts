import { Injectable } from 'angular2/core';
import { Action, Reducer, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import { GoalService } from '../services/goal-service';

export const LOADING_GOALS = 'LOADING_GOALS';
export const LOADED_GOALS = 'LOADED_GOALS';
export const UPDATING_GOALS = 'UPDATING_GOALS';
export const UPDATED_GOALS = 'UPDATED_GOALS';

export interface Goal {
    description: string,
    status: boolean,
    date: string
}

@Injectable()
export class Goals{
    goals$: Observable<Goal[]>
}