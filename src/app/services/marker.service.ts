import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Marker } from '../models/Marker';
 
@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  pinscollection: AngularFirestoreCollection<Marker>;
  pins: Observable<Marker[]>;

  constructor(public afs: AngularFirestore) { 
    this.pins = this.afs.collection('pins').valueChanges();
  }

  getPins(){
    return this.pins;
  }
}

