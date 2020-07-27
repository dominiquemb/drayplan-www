import { Component, OnInit, ViewEncapsulation, Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';


@Component({
  selector: 'app-device-data-summary',
  templateUrl: './device-data-summary.component.html',
  styleUrls: ['./device-data-summary.component.scss']
})
export class DeviceDataSummaryComponent implements OnInit {
  id: any;
  rte: any;
  itf: any;
  dataHtml: any;
  iframeSrc: any;
  items: Array<any>;
  currentInterface: any = false;

  getItemHtml() {
	let path = '';
	console.log('window innerheight');
	console.log(window.innerHeight);
	let innerHeight = window.innerHeight;
  	if (this.id && this.itf) {
		path = `https://api.virt-ciso.com/opnsense/viewOpnSensePage?rte=${this.rte}&id=${this.id}&if=${this.itf}&height=${innerHeight}`;
	}
  	else if (this.id) {
		path = `https://api.virt-ciso.com/opnsense/viewOpnSensePage?rte=${this.rte}&id=${this.id}&height=${innerHeight}`;
	}
	else if (this.itf) {
		path = `https://api.virt-ciso.com/opnsense/viewOpnSensePage?rte=${this.rte}&if=${this.itf}&height=${innerHeight}`;
	}
	else {
		path = `https://api.virt-ciso.com/opnsense/viewOpnSensePage?rte=${this.rte}&height=${innerHeight}`;
	}

	this.http.get(path)
	.subscribe((data: any) => {
		this.dataHtml = this._sanitizer.bypassSecurityTrustHtml(data.html);
		//this.iframeSrc = data.path;
	});
  }

  enableEditingItem(id) {
  	this.id = id;

  	if (this.id && this.itf) {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte, 'id': this.id, 'if': this.itf } });
	}
  	else if (this.id) {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte, 'id': this.id } });
	}
	else if (this.itf) {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte, 'if': this.itf } });
	}
	else {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte } });
	}
  }

  enableAddingItem() {
  	if (this.id && this.itf) {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte, 'id': this.id, 'if': this.itf } });
	}
  	else if (this.id) {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte, 'id': this.id } });
	}
	else if (this.itf) {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte, 'if': this.itf } });
	}
	else {
		this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte } });
	}
  }

  goBackToDashboard() {
  	this.router.navigate(['/dashboard']);
  }
  constructor(private _sanitizer:DomSanitizer, private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { 

	  this.route.queryParamMap.subscribe(obj => {
		if (obj['params']) {
			const { id, route: rte, if: itf } = obj['params'];

			this.rte = rte;
			this.itf = itf;
			this.id = id;

			if (!rte) {
			console.log('dsfdsfds');
				this.goBackToDashboard();
			}
			this.getItemHtml();
		}
	  });

	  }

	  ngOnInit() {
	  }
}

