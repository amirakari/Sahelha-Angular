import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../../Model/Produit';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueDonService {
  link = environment.http + '/produit/boutique1';
  constructor(private http: HttpClient) {}
  getBoutique(id): Observable<Produit[]>{
    const params = new HttpParams().set('id', id);
    return this.http.get<Produit[]>(this.link + `/${id}`); }
}
