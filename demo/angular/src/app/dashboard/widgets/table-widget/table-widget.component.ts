import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableWidgetComponent implements OnInit {

  routes:any = false;

  constructor(private http: HttpClient) { 
	this.http.get('http://10.0.5.230:4000/opnsense/getRoutes')
	    .subscribe((data: any) => {
		this.routes = data;
		console.log(this.routes);
	    });
  }


  ngOnInit() {
  }

}
