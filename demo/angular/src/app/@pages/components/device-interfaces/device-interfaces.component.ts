import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
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
  enable:boolean = true;
  lock:boolean = false;
  interfaces: Array<any>;
  editedInterface: object;
  editInterfaceForm: FormGroup;

  getInterfaces() {
	this.http.get('https://api.virt-ciso.com/opnsense/getInterfaces')
	.subscribe((data: any) => {
		this.interfaces = data;
	});
  }

  enableEditingInterface(itf) {
  	this.editingInterface = itf;
  }

  enableAddingInterface() {
  	this.addingInterface = true;
  }

  toggleCheckbox(evt, name) {
	  let currentValue = this.editInterfaceForm.controls[name].value;
	  this.editInterfaceForm.controls[name].setValue(!currentValue);
	  console.log(this.editInterfaceForm.controls[name]);
  /*
    const oldValue = this[name];
    this[name] = !oldValue;
    console.log(this[name]);
    */
    //    const oldValue = this.editInterfaceForm.controls[ name ].value;
    //    this.editInterfaceForm.controls[ name ].setValue(!evt.target.value);
    //    console.log(evt);
    //    console.log(this.editInterfaceForm.controls[ name ]);
  }

  getFormControl(name) {
    return this.editInterfaceForm.controls[ name ];
  }
  

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.editInterfaceForm = this.fb.group({
      enable :[ 'on', [] ],
      lock: [ false, [] ],
      name :[ '', [ Validators.required ] ],
      password :[ '', [ Validators.required ] ],
      email :[ '', [ Validators.required ] ],
      descr :[ '', [ Validators.required ] ],
      language :[ '', [ Validators.required ] ],
      groups :[ '', [ Validators.required ] ],
    });

    console.log(this.getFormControl('lock'));
    
    
    this.editedInterface = {
   	'enable': true,
	'lock': false,
  	'scope': 'user',
	'act': 'new',
	'chkNewCert': 'on',
	'save': 'save',
	'priv_delete': null,
	'api_delete': null,
	'certid': null,
	'comment': null,
	'landing_page': null,
	'expires': null,
	'shell': null,
	'authorizedkeys': null,
	'ipsecpdk': null,
	'name': null,
	'password': null,
	'email': null,
	'descr': null,
	'language': 'Default',
	'groups[]': 'admins',
	};

	this.getInterfaces();
  }

  ngOnInit() {
  }

}
