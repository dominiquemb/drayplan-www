import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RoutesTableComponent implements OnInit {

  routes:any = false;

  constructor(private http: HttpClient) { 
	  this.http.get('https://api.virt-ciso.com/opnsense/getRoutes')
	    .subscribe((data: any) => {
		this.routes = data;
		console.log(this.routes);
	    });
  }

  ngOnInit() {
  }

}
