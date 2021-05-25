import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {Observable} from 'rxjs';
import {Boutique} from '../../Model/Boutique';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private Boutique: Boutique[];
  link = environment.http + '/boutique';
  constructor(private http: HttpClient) { }
  addBoutique(boutique: Boutique): Observable<any>{
    return  this.http.post(this.link, boutique);
  }
}
