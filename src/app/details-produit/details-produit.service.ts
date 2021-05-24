import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';
import {Commande} from '../Model/commande';
import {Utilisateur} from '../Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class DetailsProduitService {
  link = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getBoutique(id): Observable<Produit>{
    return this.http.get<Produit>(this.link + `produit` +  `/${id}`); }
  PasserCommande(quantite, id, utilisateur: Commande): Observable<any>{
    return this.http.post<any>(this.link + `commande` +  `/${quantite}` + `/${id}`, utilisateur); }
  CommandeProduit(id, quantite, utilisateur: Produit): Observable<any>{
    return this.http.patch<any>(this.link + `produit` + `/panier` + `/${id}` + `/${quantite}`, utilisateur); }
}
