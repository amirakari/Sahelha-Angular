import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commande} from '../Model/commande';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  link = 'http://localhost:3000/commande/get';
  constructor(private http: HttpClient) { }
  getBoutique(id: number): Observable<Commande>{
    return this.http.get<Commande>(this.link + `/${id}`);
  }
}
