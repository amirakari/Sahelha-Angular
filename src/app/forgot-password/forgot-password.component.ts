import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../utilisateur/user.service';
import {ForgotPasswordService} from './forgot-password.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  errorMessage1 = '';
  message = '';
  constructor(private userService: ForgotPasswordService,
              private router: Router,
              private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit(): void {
  }
  addUtilisateur(formulaire: NgForm){
    this.userService.ForgotPassword(formulaire.value).subscribe(
      (response) => {
        console.log(formulaire);
        this.message = 'Mail envoyé avec succès . vérifie votre compte mail';
      },
      (error) => {
        console.log(error);
        console.log(formulaire.value);
        this.errorMessage1 = `Il n'existe aucun compte avec cette adresse`;
      }
    );

  }
  login1(){
    const link = [''];
    this.router.navigate(link, { skipLocationChange: true });
  }
  changeLang1(): void{
    this.translate.use('fr');
  }
  changeLang2(): void{
    this.translate.use('ar');
  }
}
