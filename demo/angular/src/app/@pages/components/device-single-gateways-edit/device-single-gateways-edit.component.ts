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
  selector: 'app-device-single-gateways-edit',
  templateUrl: './device-single-gateways-edit.component.html',
  styleUrls: ['./device-single-gateways-edit.component.scss']
})
export class DeviceSingleGatewaysEditComponent implements OnInit {
  editingItem: boolean = false;
  addingItem: boolean = false;
  id: number;
  formHtml: any;
  items: Array<any>;
  editedItem: object;
  editItemForm: FormGroup;
  currentInterface: any = false;
  typeOptions: Array<object>;
  type6Options: Array<object>;
  mediaoptOptions: Array<object>;
  subnetOptions: Array<object>;
  gatewayOptions: Array<object>;
  track6interfaceOptions: Array<object>;

  submitForm(evt: KeyboardEvent):any {
  	evt.preventDefault();
	  if (document.forms) {
		if (document.forms['iform']) {
			const formEl = document.forms['iform'];
			const formData = new FormData(formEl);
			console.log(formEl);
			for (let [fieldkey, fieldval] of formData.entries()) {
				this.editedItem[fieldkey] = fieldval;
			}
			/*
			for (let [fieldkey, fieldval] of Object.entries(this.editedItem)) {
				if (this.editItemForm.value[fieldkey]) {
					let formField = this.editItemForm.value[fieldkey];
					formField = String(formField);
					this.editedItem[fieldkey] = formField;
				}
			}
			*/
		}
	}
	this.saveItem();
  }

  saveItem() {
  	let url;
	if (this.id) {
		url = `https://api.virt-ciso.com/opnsense/editSingleGateway?id=${this.id}`;
	} else {
		url = `https://api.virt-ciso.com/opnsense/editSingleGateway`;
	}
  	this.http.post(url, this.editedItem)
	.subscribe((data: any) => {
	console.log(data);
	//	this.router.navigate(['/dashboard']);
	});
  }
  getItemById(id) {
	this.id = id;
	this.http.get(`https://api.virt-ciso.com/opnsense/editSingleGateway?id=${id}`)
	.subscribe((data: any) => {
	console.log(data);
		this.formHtml = this._sanitizer.bypassSecurityTrustHtml(data.html);
	/*
	    this.editingItem = true;
	    this.currentInterface = data;

	    this.editItemForm = this.fb.group({
	    	'enable' :[ data.enable, [] ], //checkbox
		'lock': [ data.lock, [] ], // checkbox
	      'descr':[ data.descr, [] ],
	      'blockpriv':[ data.blockpriv, [ ] ], // checkbox
	      'blockbogons':[ data.blockbogons, [ ] ], // checkbox
	      'type':[ data.type, [ ] ], // dropdown
	      'type6':[ data.type6, [] ], // dropdown
	      'spoofmac':[ data.spoofmac, [] ],
	      'mtu':[ data.mtu, [] ],
	      'mss':[ data.mss, [] ],
	      'mediaopt':[ data.mediaopt, [] ], // dropdown
	      'ipaddr':[ data.ipaddr, [] ],
	      'subnet':[ data.subnet, [] ], // dropdown
	      'gateway':[ data.gateway, [] ],
	      'track6-prefix-id--hex':[ data['track6-prefix-id--hex'], [] ],
	      'dhcpd6track6allowoverride': [ data['dhcpd6track6allowoverride'], []  ], // checkbox
	      'track6-interface': [ data['track6-interface'], []  ], // dropdown
	    });
	    */
	});
  }

  enableEditingItem(id) {
  	this.getItemById(id);
  	this.editingItem = id;
	this.router.navigate(['/single-gateway-edit'], { queryParams: { 'id': id } });
  }

  enableAddingItem() {
  	this.addingItem = true;
  }
  /*
  toggleCheckbox(evt, name) {
	let currentValue = this.editItemForm.controls[name].value;
	this.editItemForm.controls[name].setValue(!currentValue);
  }

  getFormControl(name) {
    return this.editItemForm.controls[ name ];
  }
  */

  goBackToDashboard() {
  	this.router.navigate(['/dashboard']);
  }
  constructor(private _sanitizer:DomSanitizer, private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
  		this.editingItem = true;
		/*
	    this.editItemForm = this.fb.group({
		      'enable' :[ '', [] ], //checkbox
		      'lock': [ '', [] ], // checkbox
		      'descr':[ '', [] ],
		      'blockpriv':[ '', [ ] ], // checkbox
		      'blockbogons':[ '', [ ] ], // checkbox
		      'type':[ '', [ ] ], // dropdown
		      'type6':[ '', [] ], // dropdown
		      'spoofmac':[ '', [] ],
		      'mtu':[ '', [] ],
		      'mss':[ '', [] ],
		      'mediaopt':[ '', [] ], // dropdown
		      'ipaddr':[ '', [] ],
		      'subnet':[ '', [] ], // dropdown
		      'gateway':[ '' , [] ],
		      'track6-prefix-id--hex':[ '', [] ],
		      'dhcpd6track6allowoverride': [ '', []  ], // checkbox
		      'track6-interface': [ '', []  ], // dropdown
	    });
	    */
	  this.editedItem = { 
		};
		/*
	    this.typeOptions = [
	    	{
			label: 'Static IPv4',
			value: 'static',
			disabled: false,
		},
	    ];

	    this.type6Options = [
	    	{
			label: 'Track Interface',
			value: 'track6',
			disabled: false,
		},
	    ];

	    this.mediaoptOptions = [
	    	{
			label: 'Default (no preference, typically autoselect)',
			value: '',
			disabled: false,
		},
	    ];


	    this.subnetOptions = [
	    	{
			label: '24',
			value: '24',
			disabled: false,
		},
	    ];

	    this.gatewayOptions = [
	    	{
			label: 'Auto-detect',
			value: 'none',
			disabled: false,
		},
	    	
	    ];

	    this.track6interfaceOptions = [
	    	{
			label: 'Nothing selected',
			value: '',
			disabled: false,
		},
	    ];
	    */
	this.route.queryParamMap.subscribe(obj => {
		if (obj['params']) {
			const { id } = obj['params'];
			if (id) {
				this.getItemById(id);
			}
			else {
				this.router.navigate(['/dashboard']);
			}
		}
	  });

	  }

	  ngOnInit() {
	  }
}

