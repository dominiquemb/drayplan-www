import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
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
  selector: 'device-interface-edit',
  templateUrl: './device-interface-edit.component.html',
  styleUrls: ['./device-interface-edit.component.scss']
})
export class DeviceInterfaceEditComponent implements OnInit {
  editingInterface: boolean = false;
  addingInterface: boolean = false;
  itfname: string = '';
  interfaces: Array<any>;
  editedInterface: object;
  editInterfaceForm: FormGroup;
  currentInterface: any = false;
  typeOptions: Array<object>;
  type6Options: Array<object>;
  mediaoptOptions: Array<object>;
  subnetOptions: Array<object>;
  gatewayOptions: Array<object>;
  track6interfaceOptions: Array<object>;

  submitForm(evt: KeyboardEvent):any {
	for (let [fieldkey, fieldval] of Object.entries(this.editedInterface)) {
		if (this.editInterfaceForm.value[fieldkey]) {
			let formField = this.editInterfaceForm.value[fieldkey];
			formField = String(formField);
			this.editedInterface[fieldkey] = formField;
		}
	}
  console.log(this.editInterfaceForm);
	this.saveInterface();
  }

  saveInterface() {
	this.http.post(`https://api.virt-ciso.com/opnsense/editInterface/`, this.editedInterface)
	.subscribe((data: any) => {
		this.router.navigate(['/dashboard']);
	});
  }

  getInterfaceByName(itf) {
	this.itfname = itf;
	this.http.get(`https://api.virt-ciso.com/opnsense/getInterface?if=${itf}`)
	.subscribe((data: any) => {
	    this.editingInterface = true;
	    this.currentInterface = data;

	    this.editInterfaceForm = this.fb.group({
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
	});
  }

  enableEditingInterface(itf) {
  	this.getInterfaceByName(itf.interface_type);
  	this.editingInterface = itf;
	this.router.navigate(['/interface-edit'], { queryParams: { 'if': itf.interface_type } });
  }

  enableAddingInterface() {
  	this.addingInterface = true;
  }

  toggleCheckbox(evt, name) {
	let currentValue = this.editInterfaceForm.controls[name].value;
	this.editInterfaceForm.controls[name].setValue(!currentValue);
  }

  getFormControl(name) {
    return this.editInterfaceForm.controls[ name ];
  }

  goBackToDashboard() {
  	this.router.navigate(['/dashboard']);
  }
  

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
  		this.editingInterface = true;

	    this.editInterfaceForm = this.fb.group({
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

	  this.editedInterface = { 
			"enable":"yes",
			"descr":"testdesc1",
			"type":"staticv4",
			"type6":"track6",
			"spoofmac":"",
			"mtu": "",
			"mss": "",
			"mediaopt":"",
			"ipaddr":"192.168.1.1",
			"subnet":"24",
			"gateway":"none",
			"name":"testa_GWv4",
			"gatewayip":"",
			"gatewaydescr":"",
			"alias-address":"",
			"alias-subnet":"32",
			"dhcprejectfrom": "",
			"dhcphostname": "",
			"dhcpoverridemtru":"yes",
			"adv_dhcp_pt_timeout": "",
			"adv_dhcp_pt_retry": "",
			"adv_dhcp_pt_select_timeout": "",
			"adv_dhcp_pt_reboot": "",
			"adv_dhcp_pt_backoff_cutoff": "",
			"adv_dhcp_pt_initial_interval": "",
			"adv_dhcp_pt_values":"SavedCfg",
			"adv_dhcp_send_options": "",
			"adv_dhcp_request_options": "",
			"adv_dhcp_required_options": "",
			"adv_dhcp_option_modifiers": "",
			"adv_dhcp_config_file_override_path": "",
			"country": "",
			"provider_list": "",
			"providerplan": "",
			"username": "",
			"password": "",
			"phone": "",
			"apn": "",
			"pppoe_username": "",
			"pppoe_password": "", 
			"provider": "", 
			"ppoe_hostuniq": "", 
			"pppoe_idletimeout": "", 
			"pptp_username" : "", 
			"pptp_password" : "", 
			"localip": "", 
			"pptp_subnet":"31", 
			"pptp_remote": "", 
			"pptp_idletimeout": "", 
			"ipaddrv6": "", 
			"subnetv6":"128", 
			"gatewayv6":"none", 
			"dhcp6-ia-pd-len":"0", 
			"dhcp6vlanprio":"", 
			"adv_dhcp6_interface_statement_send_options": "", 
			"adv_dhcp6_interface_statement_request_options": "", 
			"prefix-6rd-v4plen":"0", 
			"prefix-6rd-v4addr":"", 
			"track6-prefix-id--hex":"0", 
			"if":"lan", 
		};

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
    
	this.route.queryParamMap.subscribe(obj => {
		if (obj['params']) {
			const { if: itf } = obj['params'];
			if (itf) {
				this.getInterfaceByName(itf);
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
