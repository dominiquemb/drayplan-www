import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-firewall-dashboard',
  templateUrl: './device-firewall-dashboard.component.html',
  styleUrls: ['./device-firewall-dashboard.component.scss']
})
export class DeviceFirewallDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
