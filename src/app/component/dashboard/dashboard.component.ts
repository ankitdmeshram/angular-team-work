import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isSidebarOpen:boolean = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }

  ngOnInit(): void {
    if(screen.width < 900) {
      this.isSidebarOpen = false
    }
  }

}
