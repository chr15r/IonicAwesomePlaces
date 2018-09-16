import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { Place } from "../../models/place";

@Component({
  selector: "page-place",
  templateUrl: "place.html"
})
export class PlacePage {
  place: Place;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.place = this.navParams.get("place");
    console.log(this.place);
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }
  
  onDelete() {

    this.onLeave();
  }
}
