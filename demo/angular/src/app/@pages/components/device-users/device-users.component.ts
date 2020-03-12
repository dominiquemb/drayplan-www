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
  selector: 'device-users',
  templateUrl: './device-users.component.html',
  styleUrls: ['./device-users.component.scss']
})
export class DeviceUsersComponent implements OnInit {
	/*
  let newUser:any = {
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
	'ipsecpdk': null
	'name': null,
	'password': null,
	'email': null,
	'descr': null,
	'language': 'Default',
	'groups[]': 'admins',
	};

  public saveUser() {
	this.http.post('https://api.virt-ciso.com/opnsense/saveUser', newUser)
	.subscribe((data: any) => {
		console.log(data);
	});
	}*/

  submitForm(evt: KeyboardEvent):any {
  	console.log(this.newUserForm);
  }

  enterPressed(evt: KeyboardEvent):any {
  	evt.preventDefault();
  	evt.stopPropagation();
  	console.log(this.newUserForm);
  }

  getFormControl(name) {
    return this.newUserForm.controls[ name ];
  }
  
  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.newUserForm = this.fb.group({
      chkNewCert :[ 'on', [ Validators.required ] ],
      name :[ '', [ Validators.required ] ],
      password :[ '', [ Validators.required ] ],
      email :[ '', [ Validators.required ] ],
      descr :[ '', [ Validators.required ] ],
      language :[ '', [ Validators.required ] ],
      groups :[ '', [ Validators.required ] ],
    });
    
  }
  newUserForm: FormGroup;

  ngOnInit() {
  }

}
