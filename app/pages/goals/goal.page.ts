import {Page, Modal} from "ionic-framework/ionic";
import {AsyncPipe} from "angular2/common";
import {GoalService} from "../../services/goal-service";
import {CreateGoalModal} from "./create-goal-modal";
import {GoalList} from "../../components/goal-list";
import {Goals} from "../../models/goals";
const moment = require('moment');

@Page({
  template: `  
    <goal-list
      [goals]="goals.goals
    >
    
    </goal-list> 
  `,
  directives: [GoalList],
  pipes: [AsyncPipe]
})
export class GoalPage {
    
    constructor(public goals : Goals){}
//   private _dateOffset = 0;
//   public goals = [];
  
//   constructor(private goalService : GoalService, private modal: Modal) {
//       this.retrieveGoals();
//   }
  
//   incrementDay(){
//       this._dateOffset += 1;
//       return this.retrieveGoals();
//   }
  
//   decrementDay(){
//       this._dateOffset -= 1;
//       return this.retrieveGoals();
//   }
  
//   updateGoalStatus(goal){
//       return this.goalService.updateGoalStatus({id: goal.id, status: goal.status}).then(res => {
//           return this.goals = res;
//       });
//   }
  
//   removeGoal(id: number){
//       return this.goalService.deleteGoal(id).then(res => console.log(res));
//   }
  
//   addGoal(){
//       this.modal.open(CreateGoalModal)
//   }
  
//   get goalDate(){
//       return moment().add(this._dateOffset, 'd').format('L');
//   }
  
//   get titleDate(){
//       return moment(this.goalDate).format("MMM Do YY");
//   }
  
//   private retrieveGoals(){
//       return this.goalService.retrieveGoalsByDate(this.goalDate).then(res => {
//           return this.goals = res;
//       });
//   }
}
