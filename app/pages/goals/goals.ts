import {Page} from 'ionic-framework/ionic';
import {GoalService} from "../../services/goal-service";
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
        <ion-list>
        <ion-item-sliding *ngFor="#goal of goals">
                <ion-item>
                    
                </ion-item>
                <ion-item-options>
                    <button secondary (click)="completeGoal(goal)"><icon checkmark></icon> Complete</button>
                    <button danger (click)="deleteGoal(goal)"><icon trash></icon> Delete</button>
                </ion-item-options>
            </ion-item-sliding>
        </ion-list>
    </ion-content>
`
})
export class Goals {
  private _dateOffset = 0;
  public goals = [];
  
  constructor(private goalService : GoalService) {
      this.goalService.retrieveGoalsByDate(this.goalDate).then(goals => {
          this.goals = goals;
      });
  }
  
  get goalDate(){
      return moment().add(this._dateOffset, 'd').format('L');
  }
  
  get titleDate(){
      return moment(this.goalDate).format("MMM Do YY");
  }
  
  incrementDay(){
      this._dateOffset += 1;
  }
  
  decrementDay(){
      this._dateOffset -= 1;
  }
  
  completeGoal(goal){
      
  }
  
  removeGoal(goal){
      
  }
}
