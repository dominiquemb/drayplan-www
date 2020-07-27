import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-freeradius-dashboard',
  templateUrl: './device-freeradius-dashboard.component.html',
  styleUrls: ['./device-freeradius-dashboard.component.scss']
})
export class DeviceFreeradiusDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
