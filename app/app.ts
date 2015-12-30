import {App, Platform} from 'ionic-framework/ionic';
import {Dashboard} from './pages/dashboard/dashboard';
import {Goals} from './pages/goals/goals';
import {Statistics} from './pages/statistics/statistics';

@App({
  template: `
    <ion-tabs>
        <ion-tab [root]="dashboard" tabTitle="Dashboard" tabIcon="home"></ion-tab>
        <ion-tab [root]="goals" tabTitle="Goals" tabIcon="clipboard"></ion-tab>
        <ion-tab [root]="statistics" tabTitle="Statistics" tabIcon="stats"></ion-tab>
    </ion-tabs>
    <ion-overlay></ion-overlay>
`
})
export class MyApp {
  public dashboard; 
  public goals;
  public statistics;
  
  constructor(platform: Platform) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.dashboard = Dashboard;
    this.goals = Goals;
    this.statistics = Statistics;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
