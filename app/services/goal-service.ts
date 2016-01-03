import {Storage, SqlStorage } from "ionic-framework/ionic";
import {toArray} from "lodash";
/* It doesn't appear momentjs is set up to import as ES6 module so we have to use 'require'*/
const moment = require("moment");

interface SQLLiteResponse{
    res: {
        rows: Array<Object>
    },
    txt: any
}

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
    
    insertGoal({goal, complete, date}){
        return this._goalDb.query("INSERT INTO Goals (goal, complete, date) VALUES (?, ?, ?)", 
            [goal, complete, moment(date).format('L')]).
                then((data : SQLLiteResponse) => {
                    return toArray(data.res.rows);
                }, (error) => {
                    console.log(error);
                });
    }
    
    updateGoalStatus({id, status}){
        return this._goalDb.query("UPDATE Goals SET complete = ? WHERE id = ?", 
            [id, status]).
                then((data : SQLLiteResponse) => {
                    return toArray(data.res.rows);
                }, (error) => {
                    console.log(error);
                });
    }
    
    deleteGoal(id: number){
        return this._goalDb.query(`DELETE From Goals WHERE id = ?`, [id]).
            then((data : SQLLiteResponse) => {
                return toArray(data.res.rows);
            }, (error) => {
                //display error
            });
    }
    
    retrieveGoalsByDate(date: string){
        return this._goalDb.query(`SELECT * FROM Goals WHERE date = ?`, [date]).
            then((data : SQLLiteResponse) => {
                return toArray(data.res.rows);
            }, (error) => {
                //display error
            });
    }
}