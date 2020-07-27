import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-dashboard',
  templateUrl: './device-dashboard.component.html',
  styleUrls: ['./device-dashboard.component.scss']
})
export class DeviceDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
