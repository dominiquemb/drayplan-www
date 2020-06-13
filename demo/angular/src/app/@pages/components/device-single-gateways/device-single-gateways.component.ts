import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
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
  selector: 'app-device-single-gateways',
  templateUrl: './device-single-gateways.component.html',
  styleUrls: ['./device-single-gateways.component.scss']
})
export class DeviceSingleGatewaysComponent implements OnInit {
  editingItem: boolean = false;
  addingItem: boolean = false;
  items: any;
  editedItem: object;
  editItem: FormGroup;
  currentItem: any = false;

  getItems() {
	this.http.get('https://api.virt-ciso.com/opnsense/getSingleGateways')
	.subscribe((data: any) => {
		this.items = data;
	});
  }

  enableEditingItem(item) {
  	this.editingItem = item;
	this.router.navigate(['/single-gateway-edit'], { queryParams: { 'id': item.id } });
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    
	this.getItems();
  }

  ngOnInit() {
  }

}
