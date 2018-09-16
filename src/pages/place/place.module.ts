import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacePage } from './place';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    PlacePage,
  ],
  imports: [
    IonicPageModule.forChild(PlacePage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLg5t7PDn3NiLgl5p-A1D2yCa1rosm7eI'
    })
  ],
})
export class PlacePageModule {}
