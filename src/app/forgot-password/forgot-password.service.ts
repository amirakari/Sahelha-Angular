import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private utilisateurs: Utilisateur[];
  link = environment.http + '/utilisateur/forgotPassword';
  constructor(private http: HttpClient) {}
  ForgotPassword(email: string): Observable<any>{
    return  this.http.post(this.link, email);
  }
}
