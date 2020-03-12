import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent implements OnInit {
  //Sample Variables for the form
  first_name;
  last_name;
  username;
  password;
  email;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
  	console.log(f.value);
	  this.registerService.register(f.value)
	  .subscribe(result => {
		if (result['token']) {
			localStorage.setItem('drayplan_token', result.token)
			this.router.navigate(['dashboard']);
		}
	  });
  }
}
