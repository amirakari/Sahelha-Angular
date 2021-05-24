import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AffService} from './aff.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  user: Utilisateur;
  link = `http://localhost:3000/utilisateur/upload`;
  constructor(private profiluserservice: AffService, private http: HttpClient) {
  }
  UploadImage(id: number, formData: any): Observable<any>{
    const link = this.link + '/' + id;
    return this.http.post(link , formData, {
      reportProgress: true,
      observe: 'events'
    } );
  }
}
