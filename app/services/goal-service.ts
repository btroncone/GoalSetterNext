import { Storage, LocalStorage } from "ionic-framework/ionic";
import { Goal } from '../models/goals';
const moment = require("moment");



export class GoalService{
    private _goalDb : LocalStorage;
    
    constructor(){
        this._goalDb = new Storage(LocalStorage);
    }
    
    setGoals(date : string, goals : Goal[]){
        return this._goalDb.set(date, JSON.stringify(goals));
    }
    
    retrieveGoalsByDate(date: string){
        return this._goalDb.get(date).then(goals => {
          return goals ? JSON.parse(goals) : [];  
        });       
    }
}