import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as L from 'leaflet';

@Component({
  selector: 'app-local-browse',
  templateUrl: './local-browse.component.html',
  styleUrls: ['./local-browse.component.css']
})
export class LocalBrowseComponent implements OnInit {
  
  ref: Observable<{}>;
  data;
  zip;
  mapOptions;
  
  constructor(private actRoute: ActivatedRoute, private db: AngularFireDatabase) { 
    this.ref = this.db.object('loc/us/' + this.actRoute.snapshot.params.zip).valueChanges();
    this.ref.subscribe(thing => {
      this.data = thing;
      L.map('otherMap', {
        layers: [ L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }) ],
        center: L.latLng(this.data.latitude, this.data.longitude), zoom: 12
      });
    });
  }

  ngOnInit() {
  }

}
