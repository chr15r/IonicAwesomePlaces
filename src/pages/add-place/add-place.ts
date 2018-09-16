import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  ModalController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { SetLocationPage } from "../set-location/set-location";
import { Location } from "../../models/location";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: "page-add-place",
  templateUrl: "add-place.html"
})
export class AddPlacePage {
  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };
  locationIsSet = false;

  constructor(
    private modalCtrl: ModalController,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  onLocate() {
    const loader = this.loadingCtrl.create({
      content: "Getting your location: ...."
    });
    loader.present();
    this.geolocation
      .getCurrentPosition()
      .then(location => {
        loader.dismiss();
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;
      })
      .catch(error => {
        loader.dismiss;
        const toast = this.toastCtrl.create({
          message: "Could not get location. Please pick  it manually",
          duration: 2500
        });
        console.log("Error getting location", error);
      });
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, {
      location: this.location,
      isSet: this.locationIsSet
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.location = data.location;
        this.locationIsSet = true;
      }
    });
  }

  onTakePhoto() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
