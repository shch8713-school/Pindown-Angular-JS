import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { PinsComponent } from './components/pins/pins.component';

import { MarkerService } from './services/marker.service';

@NgModule({
  declarations: [AppComponent, PinsComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-gmap'),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your API Key'
    })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
