import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../Model/Utilisateur';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/utilisateur/userconnecte';
  constructor(private http: HttpClient) { }
  getUtilisateur(): Observable<Utilisateur>{
    const token = localStorage.getItem('token');
    if (token){
      const params = new HttpParams().set('access_token', `Bearer ${token}`);
      return this.http.get<Utilisateur>(this.link, {params});
    }
    return this.http.get<Utilisateur>(this.link);
  }
}
