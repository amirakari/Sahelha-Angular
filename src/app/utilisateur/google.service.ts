import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  link = environment.http + '/utilisateur/google';
  constructor(private http: HttpClient) { }
  google(): Observable<any>{
    return  this.http.get(this.link);
  }
}
