import { Injectable } from '@angular/core';
import {Boutique} from '../Model/Boutique';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../Model/Utilisateur';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  link = environment.http + '/boutique';
  constructor(private http: HttpClient) { }
  getBoutique(): Observable<Boutique[]>{
      return this.http.get<Boutique[]>(this.link);
    }
  getBoutiqueByid(id: number): Observable<Boutique>{
    return this.http.get<Boutique>(this.link + `/${id}`);
  }
  deleteboutique(id: number): Observable<Boutique>{
    return this.http.delete<Boutique>(this.link + `/${id}`);
  }
}

