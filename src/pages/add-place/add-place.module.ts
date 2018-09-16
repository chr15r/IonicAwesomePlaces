import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    AddPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLg5t7PDn3NiLgl5p-A1D2yCa1rosm7eI'
    })
  ],
  providers: [Geolocation]
})
export class AddPlacePageModule {}
