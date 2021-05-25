import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {AffService} from '../../utilisateur/profilutilisateur/aff.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  user: Utilisateur;
  link = environment.http + `/boutique/upload`;
  constructor(private profiluserservice: AffService, private http: HttpClient) { }
  UploadImage(id: number, formData: any): Observable<any>{
    const link = this.link + '/' + id;
    return this.http.post(link , formData, {
      reportProgress: true,
      observe: 'events'
    } );
  }
}
