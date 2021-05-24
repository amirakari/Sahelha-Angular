import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Boutique} from '../../Model/Boutique';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/boutique';
  constructor(private http: HttpClient) { }
  updatetilisateur(id: number, boutique: Boutique): Observable<any>{
    const link1 = this.link + `/${id}`;
    return  this.http.patch(link1, boutique);
  }
}
