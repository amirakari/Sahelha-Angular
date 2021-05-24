import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commentaire} from '../Model/Commentaire';
import {Produit} from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private Boutique: Commentaire[];
  link = 'http://localhost:3000/commentaire';
  constructor(private http: HttpClient) { }
  addBoutique(boutique: Commentaire, id): Observable<any>{
    return  this.http.post(this.link + `/${id}`, boutique);
  }
  modifierBoutique(boutique: Commentaire, id): Observable<any>{
    return  this.http.patch(this.link + `/${id}`, boutique);
  }
  getBoutique(id): Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(this.link + `/produit` + `/${id}`); }
  supprimerCommentaire(id): Observable<Commentaire[]>{
    return this.http.delete<Commentaire[]>(this.link + `/${id}`); }
}
