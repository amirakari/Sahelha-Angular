import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class LoginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'https://sandbox.paymee.tn/api/v1/payments/create' || req.url.endsWith('/check')){
      const token = 'Token ad43fbe65022ec8f63f8a961cadf7f783843a768';
      const keys = req.params.keys();
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      const cloneReq = req.clone(
        {headers}
      );
      return next.handle(cloneReq);
    }else{
      const token = localStorage.getItem('token');
      const keys = req.params.keys();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const cloneReq = req.clone(
        {headers}
      );
      return next.handle(cloneReq);
    }
  }
}
export const LoginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true
};
