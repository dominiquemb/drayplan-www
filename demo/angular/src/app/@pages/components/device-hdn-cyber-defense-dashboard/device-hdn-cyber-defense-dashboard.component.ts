import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-device-hdn-cyber-defense-dashboard',
  templateUrl: './device-hdn-cyber-defense-dashboard.component.html',
  styleUrls: ['./device-hdn-cyber-defense-dashboard.component.scss']
})
export class DeviceHdnCyberDefenseDashboardComponent implements OnInit {

  goToLink(evt, path) {
  	evt.preventDefault();
	this.router.navigate(['/' + path]);
  }

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
