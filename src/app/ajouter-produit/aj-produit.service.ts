import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class AjProduitService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/produit';
  constructor(
    private http: HttpClient
  ) {
  }
  addUtilisateur(utilisateur: Produit, codeabare , id): Observable<any>{
    return  this.http.post(this.link + `/${codeabare}` + `/${id}`, utilisateur);
  }
  uploadfiles(formData: any, id){
    return  this.http.post(this.link + `/upload` + `/${id}`, formData);
  }
}
