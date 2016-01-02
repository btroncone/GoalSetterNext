import {Storage, SqlStorage } from "ionic-framework/ionic";
import {Goal, SQLLiteResponse} from "../interfaces/common";

export class GoalService{
    private _goalDb : SqlStorage;
    
    constructor(){
        this._goalDb = new Storage(SqlStorage);
        this._goalDb.query('CREATE TABLE IF NOT EXISTS Goals (id INTEGER PRIMARY KEY AUTOINCREMENT, goal TEXT, complete INTEGER, date TEXT)').
            then(data => {
                console.log("TABLE CREATED!");
            }, error => {
                console.log("ERROR CREATING TABLE!");
            });
    }
    
    insertGoal(goal : Goal){
        return this._goalDb.query("INSERT INTO Goals (goal, complete, date) VALUES (?, ?, ?)", 
            [goal.goal, goal.complete, goal.date]).
                then((data : SQLLiteResponse) => {
                    console.log(data);
                    return data.res.rows;
                }, (error) => {
                    console.log(error);
                });
    }
    
    deleteGoal(id: number){
        return this._goalDb.query(`DELETE From Goals WHERE id = ?`, [id]).
            then((data : SQLLiteResponse) => {
                return data.res.rows;
            }, (error) => {
                //display error
            });
    }
    
    retrieveGoalsByDate(date){
        return this._goalDb.query(`SELECT * FROM Goals WHERE date = ?`, [date]).
            then((data : SQLLiteResponse) => {
                return data.res.rows;
            }, (error) => {
                //display error
            });
    }
}