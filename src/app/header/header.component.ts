import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tabs: string[] = ['home', 'destination', 'crew', 'technology'] 
  index: number = 0;
  srcHeight : number = 0;
  srcWidth : number = 0;
  openSideBar: boolean = false;
  activeTab: string = 'home';

  constructor(private router: Router) { 
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize')
  getScreenSize() {
    this.srcHeight = window.innerHeight;
    this.srcWidth = window.innerWidth;
    // console.log(this.srcHeight, this.srcWidth);
  }

onChangeTabs(index: number) {
  this.index = index;
  this.router.navigate([this.tabs[index]]);
}

  toggleSidebar() {
    this.openSideBar = true;
    // console.log(event);
  }

  closeSideBar() {
    this.openSideBar = false;
  }
}
