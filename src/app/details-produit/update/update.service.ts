import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../../Model/Produit';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  link = 'http://165.22.85.49:3000' + '/produit';
  constructor(private http: HttpClient) { }
  addUtilisateur(utilisateur: Produit, id): Observable<any>{
    return  this.http.patch(this.link + `/${id}` , utilisateur);
  }
}
