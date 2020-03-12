import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'device-power',
  templateUrl: './device-power.component.html',
  styleUrls: ['./device-power.component.scss']
})
export class DevicePowerComponent implements OnInit {
  rebooting:any = false;
  serverStatusTimeout:any = false;

  public reboot:any = () => {
	this.http.post('https://api.virt-ciso.com/opnsense/reboot', {})
	    .subscribe((data: any) => {
	    	const { status } = data;
		if (status === "ok") {
			this.rebooting = true;
			clearTimeout(this.serverStatusTimeout);
			this.serverStatusTimeout = setInterval(() => {
				this.serverStatus();
			}, 10000);

		}
	    });
  }

  public serverStatus:any = () => {
	this.http.get('https://api.virt-ciso.com/opnsense/serverStatus')
	.subscribe((data: any) => {
		const { status } = data;
		if (status === "ready" || status === "ok") {
			this.rebooting = false;
		}
	});
  }

  constructor(private http: HttpClient) { 
	this.serverStatusTimeout = setInterval(() => {
		this.serverStatus();
	}, 10000);
  }

  ngOnInit() {
  }

}
