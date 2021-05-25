import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Boutique} from '../../Model/Boutique';
import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import {Produit} from '../../Model/Produit';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitBoutiqueService {
  link = environment.http + '/produit/boutique';
  constructor(private http: HttpClient) {}
  getBoutique(id): Observable<Produit[]>{
    const params = new HttpParams().set('id', id);
    return this.http.get<Produit[]>(this.link + `/${id}`); }
  }

