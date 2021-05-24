import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commande} from '../Model/commande';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  link = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getCommande(quantite: number): Observable<Commande[]>{
    return this.http.get<Commande[]>(this.link + 'commande' + `/${quantite}`);
  }
  supprimerCommande(id: number): Observable<Commande[]>{
    return this.http.delete<Commande[]>(this.link + 'commande' + `/${id}`);
  }
  CommandeProduit(id, quantite, utilisateur: Produit): Observable<any>{
    return this.http.patch<any>(this.link + `produit` + `/${id}` + `/${quantite}`, utilisateur); }
}

