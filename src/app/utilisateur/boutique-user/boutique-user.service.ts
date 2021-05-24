import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Boutique} from '../../Model/Boutique';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueUserService {
  link = 'http://localhost:3000/boutique/user';
  constructor(private http: HttpClient) { }
  getBoutique(id: number): Observable<Boutique[]>{
    return this.http.get<Boutique[]>(this.link + `/${id}`);
  }
}
