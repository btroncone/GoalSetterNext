import {App, Platform} from 'ionic-framework/ionic';
import {Page1} from './pages/page1/page1';
import {Page2} from './pages/page2/page2';
import {Page3} from './pages/page3/page3';


@App({
  template: `
    <ion-tabs>
        <ion-tab [root]="tab1Root" tabTitle="Tab 1" tabIcon="pulse"></ion-tab>
        <ion-tab [root]="tab2Root" tabTitle="Tab 2" tabIcon="chatbubbles"></ion-tab>
        <ion-tab [root]="tab3Root" tabTitle="Tab 3" tabIcon="cog"></ion-tab>
    </ion-tabs>
    <ion-overlay></ion-overlay>
`
})
export class MyApp {
  public tab1Root; 
  public tab2Root;
  public tab3Root;
  
  constructor(platform: Platform) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
