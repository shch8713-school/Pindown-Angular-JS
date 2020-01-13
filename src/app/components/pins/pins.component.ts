import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../../services/marker.service';
import { Marker } from '../../models/Marker';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {
  pins: Marker[];

  constructor(public markerService: MarkerService) { }

  ngOnInit() {
    console.log('ngOnInit ran');
    this.markerService.getPins().subscribe(pins => {
      // console.log(pins);
      this.pins = pins;
    });
    // this.markerService.getPins().subscribe(pins => {
    //   this.pins = pins;
    // });
  }

}
