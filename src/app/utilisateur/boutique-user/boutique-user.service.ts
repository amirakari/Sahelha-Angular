import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Boutique} from '../../Model/Boutique';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueUserService {
  link = environment.http + '/boutique/user';
  constructor(private http: HttpClient) { }
  getBoutique(id: number): Observable<Boutique[]>{
    return this.http.get<Boutique[]>(this.link + `/${id}`);
  }
}
