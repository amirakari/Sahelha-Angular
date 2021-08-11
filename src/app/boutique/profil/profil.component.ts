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
        this.router.navigate(link, { skipLocationChange: true });
      },
      (error) => {
        this.errorMessage = 'Problème de création de la boutique';
        console.log(error);
      }
    );
  }
  gotoajout(){
    const link = ['boutique'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotoprofil(){
    const link = ['profilBoutique'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotomodifier(){}
  gotoproduit(){
    const link = ['produitboutique'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotoabonnement(){
    const link = ['Abonnement'];
    this.router.navigate(link, { skipLocationChange: true });
  }
}
