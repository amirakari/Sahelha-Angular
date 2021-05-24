import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/utilisateur';
  constructor(private http: HttpClient) { }
  updatetilisateur(id: number, utilisateur: Utilisateur): Observable<any>{
    const link1 = this.link + `/${id}`;
    return  this.http.patch(link1, utilisateur);
  }
}
