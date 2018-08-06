import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NavController, NavParams, Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


declare var google: any
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.initMap();
    });
  }
  // initMap() {
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //     zoom: 7,
  //     center: { lat: 41.85, lng: -87.65 }
  //   });
  // }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      let mylocation = new google.maps.LatLng(0.1320247,37.7193431);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15.58,
        center: mylocation
      });
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.deleteMarkers();
      let updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
      let image = 'assets/imgs/marker.png';
      this.addMarker(updatelocation, image);
      this.setMapOnAll(this.map);
    });

  }
  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image
    });
    this.markers.push(marker);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
}
