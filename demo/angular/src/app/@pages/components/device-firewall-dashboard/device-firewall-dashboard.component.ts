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

  goToConfigLink(evt, path) {
  	evt.preventDefault();
	window.location.href = path + "&token=" + localStorage.getItem('drayplan_token');
	//console.log(path + "&token=" + localStorage.getItem('drayplan_token'));
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
