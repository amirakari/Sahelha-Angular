import { Injectable } from '@angular/core';
import {Abonnement} from '../../Model/Abonnement';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Produit} from '../../Model/Produit';
import {Boutique} from '../../Model/Boutique';

@Injectable({
  providedIn: 'root'
})
export class AboService {
  link = environment.http + '/abonnement';
  constructor(
    private http: HttpClient
  ) {
  }
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
}
