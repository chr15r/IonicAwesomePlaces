import { Component, OnInit } from "@angular/core";
import { ModalController, Platform } from "ionic-angular";
import { AddPlacePage } from "../add-place/add-place";
import { Place } from "../../models/place";
import { PlacesService } from "../../services/places.service";
import { PlacePage } from "../place/place";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  addPlacePage = AddPlacePage;
  places: Place[] = [];
  constructor(
    public modalCtrl: ModalController,
    private placesService: PlacesService,
    private platform: Platform
  ) {
    console.log(this.platform.platforms());
    console.log(this.platform);
  }

  ngOnInit() {
    this.placesService.fetchPlaces().then((places: Place[]) => {
      this.places = places;
    });
  }

  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }

  onOpenPlace(place: Place, index: number) {
    const modal = this.modalCtrl.create(PlacePage, {
      place: place,
      index: index
    });
    modal.present();
    modal.onDidDismiss(() => {
      this.places = this.placesService.loadPlaces();
    });
  }
}
