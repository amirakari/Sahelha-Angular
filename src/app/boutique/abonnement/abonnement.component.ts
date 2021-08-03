import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AboService} from './abo.service';
import {Boutique} from '../../Model/Boutique';
import {Abonnement} from '../../Model/Abonnement';
import {ListeService} from '../../liste-boutique/liste.service';
import {UploadService} from '../afficher/upload.service';
import {environment} from '../../../environments/environment';
import {AfficheService} from '../afficher/affiche.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {
  boutique1: Boutique;
  visibility = false;
  payement: boolean;
  http: string;
  constructor(private router: Router,
              private aboService: AboService,
              private activatedRoute: ActivatedRoute,
              private afficheService: AfficheService,
              private listeService: ListeService,
              private uploadService: UploadService
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.afficheService.getUsers(params.id).subscribe(
          (response) => {
            console.log(response);
            if (response === true){
              this.payement = true;
            }else {
              this.payement = false;
            }
            console.log(this.payement);
          }
        );
      }
    );
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
          }
        );
      }
    );
  }
  show(){
    console.log(this.visibility);
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link);
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique1.id}`];
    this.router.navigate(link);
  }
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link);
  }
  gotomodifier(){
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
    this.router.navigate(link);
  }
  gotoproduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'Abonnement'];
    this.router.navigate(link);
  }
  addAbo1(){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.aboService.addAbo1(params.id).subscribe(
          (response) => {
            const link = ['boutique' + `/${this.boutique1.id}`];
            this.router.navigate(link);
          },
          (error) => {
          }
        ); }
    );

  }
  addAbo2(){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.aboService.addAbo2(params.id).subscribe(
          (response) => {
            const link = ['boutique' + `/${this.boutique1.id}`];
            this.router.navigate(link);
          },
          (error) => {
          }
        ); }
    );

  }
  addAbo3(){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.aboService.addAbo3(params.id).subscribe(
          (response) => {
            const link = ['boutique' + `/${this.boutique1.id}`];
            this.router.navigate(link);
          },
          (error) => {
          }
        ); }
    );

  }
}
