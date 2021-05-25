import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../Model/Produit';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupprimerproduitService {
  link = environment.http + '/produit';
  constructor(private http: HttpClient) { }
  supprimerUtilisateur(id): Observable<any>{
    return  this.http.delete(this.link + `/${id}` );
  }
}
