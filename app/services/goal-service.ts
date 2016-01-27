import { Storage, LocalStorage } from "ionic-framework/ionic";
import { Goal } from '../models/goals';
import { Observable } from 'rxjs';
const moment = require("moment");



export class GoalService{
    private _goalDb : LocalStorage;
    
    constructor(){
        this._goalDb = new Storage(LocalStorage);
    }
    
    setGoals({date, goals} : {date : any, goals: Goal[]}){
        return Observable.fromPromise(this._goalDb.set(date, JSON.stringify(goals)));
    }
    
    retrieveGoalsByDate(date: any){
        return Observable.fromPromise(this._goalDb.get(date));      
    }
}