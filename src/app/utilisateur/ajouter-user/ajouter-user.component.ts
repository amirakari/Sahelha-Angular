import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../Model/Utilisateur';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {LoginService} from '../login.service';
import {GoogleService} from '../google.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  utilisateurs: Utilisateur[];
  siteKey: string;
  theme: string;
  aFormGroup: FormGroup;
  errorMessage = '';
  Message = '';
  errorMessage1 = '';
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
    this.siteKey = environment.capatcha;
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
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
        this.router.navigate(['']);
      },
      (error) => {
        this.errorMessage1 = 'probléme de création du compte . vérifier les champs';
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
