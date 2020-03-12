import { Injectable } from '@angular/core';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  public isAuthenticated(): boolean {
  	const token = localStorage.getItem('drayplan_token');
	return !this.jwtHelper.isTokenExpired(token);
  }

  public logout(): any {
  	localStorage.removeItem('drayplan_token');
	return true;
  }
}
