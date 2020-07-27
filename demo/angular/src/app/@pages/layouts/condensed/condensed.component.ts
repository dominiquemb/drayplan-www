import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit,Input,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';
import { AuthGuardService } from '../../components/auth/auth-guard.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'condensed-layout',
  templateUrl: './condensed.component.html',
  styleUrls: ['./condensed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CondensedComponent extends RootLayout implements OnInit {
    /* commenting out this menu because I decided to use the OpnSense menu within the iframe instead */
    menuLinks = [
      {
        label:"Dashboard",
//        details:"12 New Updates",
	routerLink:"/dashboard",
        iconType:"pg",
        iconName:"home",
        thumbNailClass:"bg-success"
      },
      {
          label:"Interfaces",
          routerLink:"devices",
          iconType:"pg",
          iconName:"layouts2",
          toggle:"open",
          submenu:[
            {
              label:"All interfaces",
	      routerLink:"/interfaces",
              iconType:"pg",
              iconName:"layouts2",
            },
	      {
		label:"WAN",
		routerLink:"/interface-edit",
		queryParams: { 
			if: 'wan'
		},
		iconType:"pg",
		iconName:"layouts2"
	      },
	      {
		  label:"LAN",
		  routerLink:"/interface-edit",
		  queryParams: { 
			if: 'lan'
		  },
		  iconType:"pg",
		  iconName:"layouts2"
	      },
          ]
      },
      {
          label:"Firewall Rules",
          routerLink:"",
          iconType:"pg",
          iconName:"layouts2",
          toggle:"open",
          submenu:[
	      {
		label:"WAN",
		routerLink:"/firewall-rules",
		queryParams: { 
			if: 'wan'
		},
		iconType:"pg",
		iconName:"layouts2"
	      },
	      {
		  label:"LAN",
		  routerLink:"/firewall-rules",
		  queryParams: { 
			if: 'lan'
		  },
		  iconType:"pg",
		  iconName:"layouts2"
	      },
          ]
      },
      {
          label:"Gateways",
          routerLink:"devices",
          iconType:"pg",
          iconName:"layouts2",
          toggle:"open",
          submenu:[
	      {
		label:"Single",
		routerLink:"/single-gateways",
		iconType:"pg",
		iconName:"layouts2"
	      },
          ]
      },
      {
        label:"Routes",
	routerLink:"/routes",
        iconType:"pg",
        iconName:"layouts2",
      },
      {
        label:"Power",
	routerLink:"/power",
        iconType:"pg",
        iconName:"layouts2",
      },
      {
        label:"Users",
	routerLink:"/users",
        iconType:"pg",
        iconName:"layouts2",
      },
      /* End HakDefNet menu */

      /* the stuff below is just an example */
      /*
      {
        label:"Insights",
        routerLink:"insights",
        iconType:"pg",
        iconName:"layouts2",
      },
      {
        label:"Topology Map",
        routerLink:"topologymap",
        iconType:"pg",
        iconName:"layouts2",
      },
      {
        label:"Threat Management",
        routerLink:"threat-management",
        iconType:"letter",
        iconName:"Ui",
      },
      {
          label:"Profiles",
          iconType:"pg",
          iconName:"form",
          toggle:"open",
          submenu:[
            {
              label:"Profiles",
	      routerLink:"profiles",
              iconType:"letter",
              iconName:"fe",
            },
            {
              label:"Device Association",
	      routerLink:"profiles/device-association",
              iconType:"letter",
              iconName:"fl",
            },
            {
              label:"Groups",
	      routerLink:"profiles/groups",
              iconType:"letter",
              iconName:"fq",
            },
            {
              label:"LDAP",
	      routerLink:"profiles/ldap",
              iconType:"letter",
              iconName:"fq",
            }
          ]
      },
      */
  // end commented-out HakDefNet menu
  ];

    ngOnInit() {
    }
}
