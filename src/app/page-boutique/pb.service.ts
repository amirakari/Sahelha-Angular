import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PbService {
  link = 'http://localhost:3000/produit';
  constructor(private http: HttpClient) { }
  getBoutique(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.link);
  }
  findByName(nom): Observable<Produit[]>{
    let params = new HttpParams();
    params = params.append('nom', nom);
    const link = this.link + `/recherche` + `?nom=${nom.value}`;
    console.log(link);
    return this.http.get<Produit[]>(link);
  }
  findByType(type): Observable<Produit[]>{
    let params = new HttpParams();
    params = params.append('type', type);
    const link = this.link + `/recherche1` + `?type=${type.value}`;
    console.log(link);
    return this.http.get<Produit[]>(link);
  }
  findByStatus(type): Observable<Produit[]>{
    let params = new HttpParams();
    params = params.append('type', type);
    const link = this.link + `/recherche2` + `?status=${type.value}`;
    console.log(link);
    return this.http.get<Produit[]>(link);
  }
  findByLocalisation(adresse): Observable<Produit[]>{
    let params = new HttpParams();
    params = params.append('adresse', adresse);
    const link = this.link + `/recherche3` + `?adresse=${adresse.value}`;
    console.log(link);
    return this.http.get<Produit[]>(link);
  }
}
