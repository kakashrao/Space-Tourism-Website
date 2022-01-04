import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  srcHeight : number = 0;
  srcWidth : number = 0;
  openSideBar: boolean = false;

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

  onHome() {
    this.router.navigate(['/home']);
  }

  onDestination() {
    this.router.navigate(['/destination']);
  }

  onCrew() {
    this.router.navigate(['/crew']);
  }

  onTech() {
    this.router.navigate(['/tech']);
  }

  toggleSidebar(event: any) {
    this.openSideBar = true;
    console.log(event);
  }

  closeSideBar() {
    this.openSideBar = false;
  }
}
