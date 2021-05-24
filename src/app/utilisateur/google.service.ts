import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  link = 'http://localhost:3000/utilisateur/google';
  constructor(private http: HttpClient) { }
  google(): Observable<any>{
    return  this.http.get(this.link);
  }
}
