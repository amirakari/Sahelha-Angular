import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {UserService} from '../../utilisateur/user.service';
import {LoginService} from '../../utilisateur/login.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProfilService} from './profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  errorMessage = '';
  errorMessage1 = '';
  errorMessage2 = '';
  errorMessage3 = '';
  errorMessage4 = '';
  errorMessage5 = '';
  message = '';
  constructor(private formBuilder: FormBuilder,
              private boutiqueService: ProfilService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
  }
  addBoutique(Ajouterboutique: NgForm){
    this.boutiqueService.addBoutique(Ajouterboutique.value).subscribe(
      (response) => {
        console.log(Ajouterboutique);
        const link = ['boutique'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Problème de création de la boutique : tous les champs sont obligatoires sauf la visite virtuelle';
        this.errorMessage1 = `l'adresse mail de la boutique doit être unique`;
        this.errorMessage2 = `Il faut donner la totalité du lien vers le profil Facebook de la votre boutique`;
        this.errorMessage3 = `Il faut donner la totalité du lien vers le profil instagram de la votre boutique`;
        this.errorMessage5 = `Il faut donner correctement la localisation de la votre boutique sur googler maps : par exemple 35.76471422196534, 10.809237402331933 avant la virgule est la latitude et après la virgule est la longitude`;
        this.errorMessage4 = `Il faut donner le lien direct offert par panoraven de la votre visite virtuelle boutique`;
        console.log(error);
      }
    );
  }
  gotoajout(){
    const link = ['boutique'];
    this.router.navigate(link);
  }
  gotoprofil(){
    const link = ['profilBoutique'];
    this.router.navigate(link);
  }
  gotomodifier(){}
  gotoproduit(){
    const link = ['produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['Abonnement'];
    this.router.navigate(link);
  }
}
