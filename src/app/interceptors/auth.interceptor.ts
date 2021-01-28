import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const authorizeUrls = [environment.baseMoviesUrl];
const bearerToken = 'Wookie2019';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      authorizeUrls.some((authorizeUrl) => request.url.includes(authorizeUrl))
    ) {
      const authorizedRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + bearerToken),
      });
      return next.handle(authorizedRequest);
    }
    return next.handle(request);
  }
}
