import {Page} from 'ionic-framework/ionic';


@Page({
  template: `
    <ion-navbar *navbar>
        <ion-title>Dashboard</ion-title>
    </ion-navbar>
    <ion-content padding class="page1">
        <h2>Welcome to Ionic!</h2>
        <p>
            This starter project comes with simple tabs-based layout for apps
            that are going to primarily use a Tabbed UI.
        </p>
        <p>
            Take a look at the <code>www/app/</code> directory to add or change tabs,
            update any existing page or create new pages.
        </p>
    </ion-content>
  `,
})
export class Dashboard {
  constructor() {

  }
}
