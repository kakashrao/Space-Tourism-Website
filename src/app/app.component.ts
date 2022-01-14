import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'space-tourism-website';

  showSpinner: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
}
