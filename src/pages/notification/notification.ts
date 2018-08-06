import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewslettersPage } from '../newsletters/newsletters';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  public notify:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }
  
  launchNewslettersPage(){
    this.navCtrl.push(NewslettersPage);
  }
}
