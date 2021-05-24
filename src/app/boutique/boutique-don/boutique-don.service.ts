import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueDonService {
  link = 'http://localhost:3000/produit/boutique1';
  constructor(private http: HttpClient) {}
  getBoutique(id): Observable<Produit[]>{
    const params = new HttpParams().set('id', id);
    return this.http.get<Produit[]>(this.link + `/${id}`); }
}
