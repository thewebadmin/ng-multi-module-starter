import {
  HttpEvent, HttpHandler, HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((req) => {
        if (!req.ok) {
          switch (req.status) {
            case 401:
            case 403:
            case 404:
            default:
              console.error(`Unexpected error code received: ${req.status}`);
          }
          return next.handle(req);
        }
        return next.handle(req);
      })
    );
  }
}
