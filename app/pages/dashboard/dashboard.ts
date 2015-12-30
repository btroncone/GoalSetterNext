import {Page} from 'ionic-framework/ionic';


@Page({
  template: `
    <ion-navbar *navbar>
        <ion-title>Dashboard</ion-title>
    </ion-navbar>
    
    <ion-content padding>
        <h3>{{title}}</h3>
    </ion-content>
  `,
})
export class Dashboard {
  public title = "Dashboard";
  
  constructor() {

  }
}
