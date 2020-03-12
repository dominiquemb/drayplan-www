import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //Sample Varriables
  userName;
  password;
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
	  this.loginService.login(f.value)
	  .subscribe(result => {
		if (result['token']) {
			localStorage.setItem('drayplan_token', result.token)
			this.router.navigate(['dashboard']);
		}
	  });
  }
}
