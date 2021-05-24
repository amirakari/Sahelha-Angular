import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class LoginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const keys = req.params.keys();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const cloneReq = req.clone(
        {headers}
      );
      return next.handle(cloneReq);
    }else {
      return next.handle(req);
    }
  }
}
export const LoginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true
};
