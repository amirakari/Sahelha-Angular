import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Utilisateur} from '../Model/Utilisateur';
import {catchError} from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private utilisateurs: Utilisateur[];
link = environment.http + '/utilisateur';
  constructor(
    private http: HttpClient
  ) {
  }
  addUtilisateur(utilisateur: Utilisateur): Observable<any>{
    return  this.http.post(this.link, utilisateur);
  }
  supprimertilisateur(id: number): Observable<any>{
    const link = this.link + `/${id}`;
    return  this.http.delete(link);
  }
}
