import { Component, OnInit } from '@angular/core';
import { SpaceTourismService } from '../space-tourism.service';

interface Data {
  name: string,
  role: string,
  images: {
    png: string,
    webp: string
  },
  bio: string,
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  crewData: Data[] = [];
  index: number = 0;

  constructor(private _spaceTourismService: SpaceTourismService) { }

  ngOnInit(): void {
    this._spaceTourismService.getData().subscribe(data => {
      console.log(data.crew);
      this.crewData = data.crew;
  })

  setInterval(() => {
    this.index++;
    if(this.index > 3) {
      this.index = 0;
    }
    this.changeCrew(this.index);
  }, 5000)
  }

  changeCrew(index: number) {
    this.index = index;
  }
}
