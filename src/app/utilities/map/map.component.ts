import { Component, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, LeafletMouseEventHandlerFn, marker, Marker } from 'leaflet';
import { tileLayer } from 'leaflet';
import { EventEmitter } from '@angular/core';

import { coordinatesMap } from './coordinate';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies'
      })
    ],
    zoom: 15,
    center: latLng(13.009695668312496, -282.2327613830567)
  };

  layers: Marker<any>[] = [];
  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
    this.onSelectedLocation.emit({ latitude, longitude });
  }
}
