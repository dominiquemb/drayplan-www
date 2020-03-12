import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'table-basic-widget',
  templateUrl: './table-basic-widget.component.html',
  styleUrls: ['./table-basic-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})

@Injectable()
export class TableBasicWidgetComponent implements OnInit {

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

  showRoutes() {
  }

}
