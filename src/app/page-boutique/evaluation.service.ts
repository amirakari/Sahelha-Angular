import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Produit} from '../Model/Produit';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  link = 'http://localhost:3000/evaluationproduit/produit';
  constructor(private http: HttpClient) { }
  getBoutique(id: number){
     return this.http.get(this.link + `/${id}`);
  }
}
