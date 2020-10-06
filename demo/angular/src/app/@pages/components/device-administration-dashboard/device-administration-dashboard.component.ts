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

  goToConfigLink(evt, path) {
        evt.preventDefault();
	// TODO: change the ? to a & depending on the URL later
        window.location.href = path + "?token=" + localStorage.getItem('drayplan_token');
        //console.log(path + "&token=" + localStorage.getItem('drayplan_token'));
  }


  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

}
