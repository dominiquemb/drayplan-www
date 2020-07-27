import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-endpoint-defense-dashboard',
  templateUrl: './device-endpoint-defense-dashboard.component.html',
  styleUrls: ['./device-endpoint-defense-dashboard.component.scss']
})
export class DeviceEndpointDefenseDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
