import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Abonnement} from '../Model/Abonnement';
import {Paymme} from '../Model/Paymme';

@Injectable({
  providedIn: 'root'
})
export class EssaigratuitService {
  constructor(private http: HttpClient) {}
  link = environment.http + '/abonnement';
  link1 = 'https://sandbox.paymee.tn/api/v1/payments/create';
  link2 = 'https://sandbox.paymee.tn/api/v1/payments/';
  link3 = environment.http + '/abonnement/paymee/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Token 1a76baf401816c64ba0ac364b379532591e0a42a'
    })
  };
  addAbo1(id): Observable<any>{
    return  this.http.post(this.link + '/abo1' + `/${id}`, null);
  }
  addAbo2(id): Observable<any>{
    return  this.http.post(this.link + '/abo2' + `/${id}`, null);
  }
  addAbo3(id): Observable<any>{
    return  this.http.post(this.link + '/abo3' + `/${id}`, null);
  }
  getabobyboutique(id): Observable<Abonnement[]>{
    const params = new HttpParams().set('id', id);
    return this.http.get<Abonnement[]>(this.link + '/boutique' + `/${id}`); }
  deleteboutique(id: number): Observable<Abonnement>{
    return this.http.delete<Abonnement>(this.link + `/${id}`);
  }
  getabo(): Observable<any>{
    return  this.http.get(this.link);
  }
  ajouterMaClasse(monObjet: Paymme): Observable<any> {
    return this.http.post<Paymme>(this.link1, monObjet, this.httpOptions);
  }
  CheckPaiement(token): Observable<any>{
    return  this.http.get(this.link2 + `${token}` + '/check' , this.httpOptions );
  }
  Paiement(id: number): Observable<any>{
    const link4 = this.link3 + `${id}`;
    return  this.http.patch(link4, null);
  }
}
