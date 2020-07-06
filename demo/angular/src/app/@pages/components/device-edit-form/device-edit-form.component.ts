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
  selector: 'app-device-edit-form',
  templateUrl: './device-edit-form.component.html',
  styleUrls: ['./device-edit-form.component.scss']
})
export class DeviceEditFormComponent implements OnInit {
  editingItem: boolean = false;
  addingItem: boolean = false;
  id: any;
  rte: any;
  itf: any;
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
  	let path;
  	if (this.id && this.itf) {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItem?rte=${this.rte}&id=${this.id}&if=${this.itf}`;
	}
  	else if (this.id) {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItem?rte=${this.rte}&id=${this.id}`;
	}
	else if (this.itf) {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItem?rte=${this.rte}&if=${this.itf}`;
	}
	else {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItem?rte=${this.rte}`;
	}
  	this.http.post(path, this.editedItem)
	.subscribe((data: any) => {
		const { success } = data;
		if (success) { 
			this.router.navigate(['/dashboard'], { queryParams: { 'route': this.rte } });
		}
	});
  }

  getItemByInterface(itf) {
	this.http.get(`https://api.virt-ciso.com/opnsense/${this.rte}?if=${this.itf}`)
	.subscribe((data: any) => {
		this.formHtml = this._sanitizer.bypassSecurityTrustHtml(data.html);
	});
  }

  getItemById(id) {
	this.http.get(`https://api.virt-ciso.com/opnsense/editOpnSenseItemForm?rte=${this.rte}&id=${this.id}`)
	.subscribe((data: any) => {
		this.formHtml = this._sanitizer.bypassSecurityTrustHtml(data.html);
	});
  }

  getItemForm() {
	let path = '';
  	if (this.id && this.itf) {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItemForm?rte=${this.rte}&id=${this.id}&if=${this.itf}`;
	}
  	else if (this.id) {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItemForm?rte=${this.rte}&id=${this.id}`;
	}
	else if (this.itf) {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItemForm?rte=${this.rte}&if=${this.itf}`;
	}
	else {
		path = `https://api.virt-ciso.com/opnsense/editOpnSenseItemForm?rte=${this.rte}`;
	}
	this.http.get(path)
	.subscribe((data: any) => {
		this.formHtml = this._sanitizer.bypassSecurityTrustHtml(data.html);
	});
  }

  enableEditingItem(id) {
  	this.getItemById(id);
  	this.editingItem = id;
	this.router.navigate(['/device-edit-form'], { queryParams: { 'route': this.rte } });
  }

  enableAddingItem() {
  	this.addingItem = true;
  }

  goBackToDashboard() {
  	this.router.navigate(['/dashboard']);
  }
  constructor(private _sanitizer:DomSanitizer, private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
  		this.editingItem = true;
	  this.editedItem = { 
		};
	  this.route.queryParamMap.subscribe(obj => {
		if (obj['params']) {
			const { id, route: rte, if: itf } = obj['params'];

			this.rte = rte;
			this.itf = itf;
			this.id = id;

			if (!rte) {
				this.goBackToDashboard();
			}
			this.getItemForm();
		}
	  });

	  }

	  ngOnInit() {
	  }
}

