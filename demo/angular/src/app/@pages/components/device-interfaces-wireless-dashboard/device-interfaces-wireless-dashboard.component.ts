import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-interfaces-wireless-dashboard',
  templateUrl: './device-interfaces-wireless-dashboard.component.html',
  styleUrls: ['./device-interfaces-wireless-dashboard.component.scss']
})
export class DeviceInterfacesWirelessDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
