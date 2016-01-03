import {Page, Modal} from 'ionic-framework/ionic';
import {GoalService} from "../../services/goal-service";
import {CreateGoalModal} from "./create-goal-modal";
const moment = require('moment');

@Page({
  template: `  
    <ion-navbar *navbar>
    <ion-buttons>
        <button (click)="decrementDay()">
            <icon arrow-dropleft></icon>
        </button>
        <button (click)="incrementDay()">
            <icon arrow-dropright></icon>
        </button>
    </ion-buttons>
        <ion-title>
            {{titleDate}}
        </ion-title>  
    </ion-navbar>
    <ion-content>
        <button full default (click)="addGoal()">Add Goal</button>
        <ion-list>
            <ion-item-sliding>
                <ion-item *ngFor="#goal of goals">
                    <ion-checkbox dark checked="{{goal.complete}}">
                        {{goal.goal}}
                    </ion-checkbox>
                </ion-item>
                <ion-item-options>
                    <button danger (click)="removeGoal(goal)"><icon trash></icon> Delete</button>
                </ion-item-options>
            </ion-item-sliding>
        </ion-list>
    </ion-content>
`
})
export class Goals {
  private _dateOffset = 0;
  public goals = [];
  
  constructor(private goalService : GoalService, private modal: Modal) {
      this.retrieveGoals();
  }
  
  incrementDay(){
      this._dateOffset += 1;
      return this.retrieveGoals();
  }
  
  decrementDay(){
      this._dateOffset -= 1;
      return this.retrieveGoals();
  }
  
  updateGoalStatus(goal){
      return this.goalService.updateGoalStatus({id: goal.id, status: goal.status}).then(res => {
          return this.goals = res;
      });
  }
  
  removeGoal(id: number){
      return this.goalService.deleteGoal(id).then(res => console.log(res));
  }
  
  addGoal(){
      this.modal.open(CreateGoalModal)
  }
  
  get goalDate(){
      return moment().add(this._dateOffset, 'd').format('L');
  }
  
  get titleDate(){
      return moment(this.goalDate).format("MMM Do YY");
  }
  
  private retrieveGoals(){
      return this.goalService.retrieveGoalsByDate(this.goalDate).then(res => {
          return this.goals = res;
      });
  }
}
