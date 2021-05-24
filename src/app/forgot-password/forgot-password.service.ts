import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/utilisateur/forgotPassword';
  constructor(private http: HttpClient) {}
  ForgotPassword(email: string): Observable<any>{
    return  this.http.post(this.link, email);
  }
}
