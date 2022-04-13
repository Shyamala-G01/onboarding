import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  showToggle: string = '';
  sideNavShown=true;
  mode:any='side';
  openSidenav: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  isSidenavShown(){
    this.sideNavShown=!this.sideNavShown
  }
}
