import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Boutique} from '../../Model/Boutique';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficheService {
  constructor(private http: HttpClient) { }
}

