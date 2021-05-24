import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commande} from '../../Model/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  link = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getCommande(quantite: number): Observable<Commande[]>{
    return this.http.get<Commande[]>(this.link + 'commande' + '/boutique' + `/${quantite}`);
  }
}
