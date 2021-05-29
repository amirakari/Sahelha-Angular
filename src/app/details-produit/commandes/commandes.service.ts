import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commande} from '../../Model/commande';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  link = environment.http ;
  constructor(private http: HttpClient) { }
  getCommande(quantite: number): Observable<Commande[]>{
    return this.http.get<Commande[]>(this.link + '/commande' + '/boutique' + `/${quantite}`);
  }
}
