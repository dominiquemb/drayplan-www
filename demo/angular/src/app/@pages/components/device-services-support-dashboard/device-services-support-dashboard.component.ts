import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-services-support-dashboard',
  templateUrl: './device-services-support-dashboard.component.html',
  styleUrls: ['./device-services-support-dashboard.component.scss']
})
export class DeviceServicesSupportDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
