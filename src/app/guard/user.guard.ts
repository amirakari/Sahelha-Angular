import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';
import {Utilisateur} from '../Model/Utilisateur';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{
  user: Utilisateur;
  status: boolean;
  constructor(private profiluserservice: AffService, ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user;
                 if (this.user.type === 'user'){
          this.status = false;
        }else {
          this.status = true;
        }},
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
    return (this.status);
  }
}
