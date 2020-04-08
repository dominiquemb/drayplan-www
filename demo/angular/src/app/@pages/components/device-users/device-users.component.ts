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
  addingUser: boolean = false;
  users: Array<any>;
  newUser: object;
  newUserForm: FormGroup;


  getUsers() {
	this.http.get('https://api.virt-ciso.com/opnsense/getUsers')
	.subscribe((data: any) => {
		this.users = data;

		//if (data.count > 0) {
		//	this.users = data.data;
		//	}
	});
  }
  enableAddingUser() {
  	this.addingUser = true;
  }

  getApiKeys(user:any) {
  	const { apikeys } = user;
	let returnVal = '';

	if (apikeys) {
		const { item } = apikeys;

		if (item) {
			for (let keypair of item) {
				returnVal += `${keypair.key[0]} <br />`;
			}
		}
	}

	return returnVal;
  }

  saveUser() {
	this.http.post('https://api.virt-ciso.com/opnsense/addUser', this.newUser)
	.subscribe((data: any) => {
		console.log(data);
		if (data) {
			this.addingUser = false;
		}
	});
  }

  submitForm(evt: KeyboardEvent):any {
	for (let [fieldkey, fieldval] of Object.entries(this.newUser)) {
		if (this.newUserForm.value[fieldkey]) {
			this.newUser[fieldkey] = this.newUserForm.value[fieldkey];
		}
	}
	this.saveUser();
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
    
    this.newUser = {
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

	this.getUsers();
  }

  ngOnInit() {
  }

}
