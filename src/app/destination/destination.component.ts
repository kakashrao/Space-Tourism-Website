import { Component, OnInit } from '@angular/core';
import { SpaceTourismService } from '../space-tourism.service';

interface Data {
  name: string,
  description: string,
  images: {
    png: string,
    webp: string
  },
  distance: string,
  travel: string
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  destinations = ['Moon', 'Mars', 'Europa', 'Titan']
  destinationsData: Data[] = [];
  index: number = 0;

  constructor(private _spaceTourismService: SpaceTourismService) { 
  }

  ngOnInit(): void {
    this._spaceTourismService.getData().subscribe(data => {
      console.log(data.destinations);
      this.destinationsData = data.destinations;
})
  }

  changeDestination(index: number) {
    this.index = index;
  }
}
