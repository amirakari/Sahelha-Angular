import { Injectable } from '@angular/core';
import {Abonnement} from '../../Model/Abonnement';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Produit} from '../../Model/Produit';

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
}
