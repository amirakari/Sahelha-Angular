import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AffService} from './profilutilisateur/aff.service';
import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private utilisateurs: Utilisateur[];
  link = environment.http + '/utilisateur/login';
  link1 = environment.http + '/utilisateur/userconnecte';
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
