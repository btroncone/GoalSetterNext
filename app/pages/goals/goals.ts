import {Page} from 'ionic-framework/ionic';


@Page({
  template: `  
    <ion-navbar *navbar>
    <ion-title>
        Goals
    </ion-title>
    </ion-navbar>

    <ion-content padding>
        <h3>{{title}}</h3>
    </ion-content>
`,
})
export class Goals {
  public title = "Goals";
  
  constructor() {

  }
}
