import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMoon() {
    console.log('On the moon!!');
  }

  onMars() {
    console.log('On the mars!!');
  }

  onEuropa() {
    console.log('On the europa!!');
  }

  onTitan() {
    console.log('On the titan!!');
  }
}
