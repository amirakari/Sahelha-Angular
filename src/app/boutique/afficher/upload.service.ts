import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {AffService} from '../../utilisateur/profilutilisateur/aff.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  user: Utilisateur;
  link = `http://localhost:3000/boutique/upload`;
  constructor(private profiluserservice: AffService, private http: HttpClient) { }
  UploadImage(id: number, formData: any): Observable<any>{
    const link = this.link + '/' + id;
    return this.http.post(link , formData, {
      reportProgress: true,
      observe: 'events'
    } );
  }
}
