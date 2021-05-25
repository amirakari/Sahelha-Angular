import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  link = environment.http + '/evaluationproduit/produit';
  constructor(private http: HttpClient) { }
  getBoutique(id: number){
     return this.http.get(this.link + `/${id}`);
  }
}
