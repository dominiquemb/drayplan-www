import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-administration-dashboard',
  templateUrl: './device-administration-dashboard.component.html',
  styleUrls: ['./device-administration-dashboard.component.scss']
})
export class DeviceAdministrationDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
