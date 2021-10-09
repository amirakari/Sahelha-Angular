import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class LoginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:max-line-length
    if (req.url === 'https://sandbox.paymee.tn/api/v1/payments/create' || (req.url.startsWith('https://sandbox.paymee.tn/api/v1/payments/') && req.url.endsWith('/check'))){
      const token = 'Token 1a76baf401816c64ba0ac364b379532591e0a42a';
      const keys = req.params.keys();
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      const cloneReq = req.clone(
        {headers}
      );
      return next.handle(cloneReq);
    }
    // tslint:disable-next-line:max-line-length
    if (req.url === 'https://app.paymee.tn/api/v1/payments/create' || (req.url.startsWith('https://app.paymee.tn/api/v1/payments/') && req.url.endsWith('/check'))){
      const token = 'Token 41c73baef68906728d145088fbad369ed14edd2e';
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
