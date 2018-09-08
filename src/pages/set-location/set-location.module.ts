import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    SetLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLg5t7PDn3NiLgl5p-A1D2yCa1rosm7eI'
    })
  ],
})
export class SetLocationPageModule {}
