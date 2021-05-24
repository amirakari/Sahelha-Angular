import { Injectable } from '@angular/core';
import {Boutique} from '../../Model/Boutique';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../../Model/Utilisateur';
import {EvaluerProduit} from '../../Model/evaluerProduit';

@Injectable({
  providedIn: 'root'
})
export class EvaluerService {
  link = 'http://localhost:3000/evaluationproduit';
  constructor(private http: HttpClient) { }
  evaluerProduit(id: number, note: number, boutique: EvaluerProduit): Observable<any>{
    const link1 = this.link + `/${id}` + `/${note}`;
    return  this.http.post(link1, boutique);
  }
}
