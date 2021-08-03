import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Boutique} from '../../Model/Boutique';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../Model/Utilisateur';
import {environment} from '../../../environments/environment';
import {Abonnement} from '../../Model/Abonnement';
import {Produit} from '../../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class AfficheService {
  private abonnement: Abonnement[];
  link = environment.http + '/abonnement' + '/paiement';
  constructor(private http: HttpClient) {
  }
  getUsers(id: number){
    const link = this.link + `/${id}`;
    return  this.http.get(link);
  }
}

