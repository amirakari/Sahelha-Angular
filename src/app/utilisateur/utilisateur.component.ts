import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {GoogleService} from './google.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[];
  siteKey: string;
  theme: string;
   aFormGroup: FormGroup;
  errorMessage = '';
  message = '';
  e = true;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private loginService: LoginService,
              private googleService: GoogleService,
              private router: Router,
              private translate: TranslateService,
              private http: HttpClient) {
    translate.setDefaultLang('fr');
    this.siteKey = '6LfcvH0aAAAAAJHHlhuW547XmFI6Mz4oga1Z_k3h';
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  forgotPassword(){
    const link = ['forgotPassword'];
    this.router.navigate(link);
  }
  changer(){
    if (this.e){
      document.getElementById('password1').setAttribute('type', 'text');
      this.e = false;
    } else {
      document.getElementById('password1').setAttribute('type', 'password');
    }
  }
  logout(){
    this.loginService.logout();
  }
  login1(){
    const link = [''];
    this.router.navigate(link);
  }
  addUtilisateur(formulaire: NgForm){
    this.userService.addUtilisateur(formulaire.value).subscribe(
      (response) => {
        console.log(formulaire);
      },
      (error) => {
        this.errorMessage = 'probleme de connexion à votre serveur';
        console.log(error);
      }
    );

  }
  login(credentials){
    this.loginService.login(credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.message = '';
        this.router.navigate(['acceuil']);
      },
      (error) => {
        console.log(error);
      }
  );
  }
  google(){
    this.googleService.google().subscribe(
      (response) => {
      },
      (error) => {
        console.log(error);
      }
    );
  }
  changeLang1(): void{
    this.translate.use('fr');
  }
  changeLang2(): void{
    this.translate.use('ar');
  }
}
