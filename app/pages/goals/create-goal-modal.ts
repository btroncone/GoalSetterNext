import {Page} from 'ionic-framework/ionic';

@Page({
    template: `
    <ion-toolbar>
        <ion-title>Add Goal</ion-title>
    </ion-toolbar>
    <ion-content padding>
        <h2>I'm a modal!</h2>
        <button (click)="close()">Close</button>
    </ion-content>
  `
})
export class CreateGoalModal{
    
}