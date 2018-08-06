import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    slides  = [
      {
        title: "Samsung Galaxy S9",
        version: "Android version 7.0 naughat",
        camera: "13 & 5 MP front & rear camera",
        battery: "Battery Quality 5000 MAh",
        ram: " Main Memory (RAM) 2GB",
        storage: " Internal storage 16 GB",
        image: "assets/imgs/samsung galaxy.jpg",
        price: " Ksh 13500 /= only",
        icon: "bookmark",
        icon_color: "primary",
      },
      {
        title: "Huawei Phone",
        version: "Android version 6.0 KitKat",
        camera: "8 & 5 MP front & rear camera",
        battery: "Battery Quality 5000 MAh",
        ram: " Main Memory (RAM) 1GB",
        storage: " Internal storage 8 GB",
        image: "assets/imgs/huawei.jpeg",
        price: " Ksh 10500 /= only",
        icon: "bookmark",
        icon_color: "primary",
      },
      {
        title: "LG",
        version: "Android version 5.0",
        camera: "13 & 8 MP front & rear camera",
        battery: "Battery Quality 5000 MAh",
        ram: " Main Memory (RAM) 2GB",
        storage: " Internal storage 32 GB",
        image: "assets/imgs/lg.png",
        price: " Ksh 20500 /= only",
        icon: "bookmark",
        icon_color: "primary",
      }
    ];
    
}
