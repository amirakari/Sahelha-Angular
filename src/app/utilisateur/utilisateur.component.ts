import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {GoogleService} from './google.service';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';

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
  Message = '';
  errorMessage1 = '';
  message = '';
  visibility = false;
  e = true;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private loginService: LoginService,
              private googleService: GoogleService,
              private router: Router,
              private translate: TranslateService,
              private http: HttpClient) {
    translate.setDefaultLang('fr');
    this.siteKey = environment.capatcha;
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  forgotPassword(){
    const link = ['forgotPassword'];
    this.router.navigate(link , { skipLocationChange: true });
  }
  CreerCompte(){
    const link = ['ajouterUser'];
    this.router.navigate(link, { skipLocationChange: true });
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
    this.router.navigate(link , { skipLocationChange: true });
  }
  show(){
    console.log(this.visibility);
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }
  addUtilisateur(formulaire: NgForm){
    this.userService.addUtilisateur(formulaire.value).subscribe(
      (response) => {
        console.log(formulaire);
        this.Message = 'Succès de création du compte';
      },
      (error) => {
        this.errorMessage1 = 'probléme de création du compte . vérifier les champs';
        console.log(error);
      }
    );

  }
  gotopageboutique(){
    const link = ['pageB'];
    this.router.navigate(link , { skipLocationChange: true });
  }
  login(credentials){
    this.loginService.login(credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.message = '';
        this.router.navigate(['acceuil'], { skipLocationChange: true });
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'ces informations ne correspond à aucun compte';
        console.log(this.errorMessage);
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
