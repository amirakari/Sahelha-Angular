import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  private utilisateurs: Utilisateur[];
  link = environment.http + '/utilisateur/ChangePassword';
  constructor(private http: HttpClient) { }
  updatetilisateur(id: number, utilisateur: Utilisateur): Observable<any>{
    const link1 = this.link + `/${id}`;
    return  this.http.patch(link1, utilisateur);
  }
}
