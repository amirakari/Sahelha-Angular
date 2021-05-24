import { Injectable } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AffService} from './aff.service';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  photodeprofil: string;
  private utilisateurs: Utilisateur[];
  link = `http://localhost:3000/utilisateur/profileimage`;
  constructor(private http: HttpClient, private profiluserservice: AffService) { }
  getImageProfil(filename: string): Observable<any>{
    return this.http.get(this.link + `/${filename}`);
  }
}
