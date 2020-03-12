import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('drayplan_token'); 
    request = request.clone({
      setHeaders: {
        'Authorization': `Basic ${token}`,
	'Access-Control-Allow-Origin': '*' 
      }
    });

    return next.handle(request);
  }
}
