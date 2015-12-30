import {Page} from 'ionic-framework/ionic';


@Page({
  template: `  
    <ion-navbar *navbar>
    <ion-title>
        Statistics
    </ion-title>
    </ion-navbar>

    <ion-content padding>
        <h3>{{title}}</h3>
    </ion-content>
  `
})
export class Statistics {
  public title = "Statistics";
  
  constructor() {

  }
}
