import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AffService} from './profilutilisateur/aff.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/utilisateur/login';
  link1 = 'http://localhost:3000/utilisateur/userconnecte';
  user: Utilisateur;
  status: boolean;
  constructor(
    private profiluserservice: AffService,
    private http: HttpClient,
    private router: Router
  ) {
  }
  islogged(){
    return !! localStorage.getItem('token');
  }
  login(credentials): Observable<any>{
    return  this.http.post(this.link, credentials);
  }
  logout(){
    localStorage.removeItem('token');
    const link = [''];
    this.router.navigate(link);
  }
}
