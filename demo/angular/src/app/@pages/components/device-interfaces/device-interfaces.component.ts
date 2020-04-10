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
  selector: 'device-interfaces',
  templateUrl: './device-interfaces.component.html',
  styleUrls: ['./device-interfaces.component.scss']
})
export class DeviceInterfacesComponent implements OnInit {
  editingInterface: boolean = false;
  addingInterface: boolean = false;
  interfaces: Array<any>;
  editedInterface: object;
  editInterfaceForm: FormGroup;
  currentInterface: any = false;
  typeOptions: Array<object>;
  type6Options: Array<object>;
  mediaoptOptions: Array<object>;

  getInterfaces() {
	this.http.get('https://api.virt-ciso.com/opnsense/getInterfaces')
	.subscribe((data: any) => {
		this.interfaces = data;
	});
  }

  enableEditingInterface(itf) {
  	this.editingInterface = itf;
	this.router.navigate(['/interface-edit'], { queryParams: { 'if': itf.interface_type } });
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    
	this.getInterfaces();
  }

  ngOnInit() {
  }

}
