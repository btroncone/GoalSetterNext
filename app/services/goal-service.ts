import { Storage, LocalStorage } from "ionic-framework/ionic";
const moment = require("moment");

export interface Goal {
    description: string,
    status: boolean,
    date: string
}

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