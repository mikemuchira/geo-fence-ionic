import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 import { HomePage } from '../home/home';
 import { ActivitiesPage } from '../activities/activities';
 import { NotificationPage } from '../notification/notification';
 import { LocationPage } from '../location/location';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot: any = HomePage;
  activitiesRoot: any = ActivitiesPage;
  notificationRoot: any = NotificationPage;
  locationRoot: any = LocationPage;


  constructor(public navCtrl: NavController, public navparams: NavParams) {}

}
