import { Component, HostListener, OnInit } from '@angular/core';
import { SpaceTourismService } from '../space-tourism.service';

interface Data {
  name: string;
  description: string;
  images: {
    landscape: string;
    portrait: string;
  };
}

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  srcHeight: number = 0;
  srcWidth: number = 0;
  techData: Data[] = [];
  index: number = 0;
  showSpinner: boolean = true;

  constructor(private _spaceTourismService: SpaceTourismService) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);

    this._spaceTourismService.getData().subscribe((data) => {
      console.log(data.technology);
      this.techData = data.technology;
    });
  }

  @HostListener('window:resize')
  getScreenSize() {
    this.srcHeight = window.innerHeight;
    this.srcWidth = window.innerWidth;
    // console.log(this.srcHeight, this.srcWidth);
  }

  changeTech(index: number) {
    this.index = index;
  }
}
