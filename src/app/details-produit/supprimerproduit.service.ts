import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../Model/Produit';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupprimerproduitService {
  link = 'http://localhost:3000/produit';
  constructor(private http: HttpClient) { }
  supprimerUtilisateur(id): Observable<any>{
    return  this.http.delete(this.link + `/${id}` );
  }
}
