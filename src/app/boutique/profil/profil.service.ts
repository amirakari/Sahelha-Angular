import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {Observable} from 'rxjs';
import {Boutique} from '../../Model/Boutique';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private Boutique: Boutique[];
  link = 'http://localhost:3000/boutique';
  constructor(private http: HttpClient) { }
  addBoutique(boutique: Boutique): Observable<any>{
    return  this.http.post(this.link, boutique);
  }
}
