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
  selector: 'app-device-firewall-rules',
  templateUrl: './device-firewall-rules.component.html',
  styleUrls: ['./device-firewall-rules.component.scss'],
})
export class DeviceFirewallRulesComponent implements OnInit {
  editingFirewallRule: boolean = false;
  addingFirewallRule: boolean = false;
  firewallRules: any;
  editedfirewallRule: object;
  editFirewallRuleForm: FormGroup;
  currentFirewallRule: any = false;
  typeOptions: Array<object>;
  type6Options: Array<object>;
  mediaoptOptions: Array<object>;

  getFirewallRules() {
	this.http.get('https://api.virt-ciso.com/opnsense/getFirewallRules')
	.subscribe((data: any) => {
		this.firewallRules = data;
	});
  }

  enableEditingFirewallRules(rule) {
  	this.editingFirewallRule = rule;
	this.router.navigate(['/device-edit-form'], { queryParams: { 'if': rule.interface, 'id': rule.id, 'route': 'firewall_rules_edit' } });
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    
	this.getFirewallRules();
  }

  ngOnInit() {
  }


}
