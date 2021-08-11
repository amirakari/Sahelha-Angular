import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../../liste-boutique/liste.service';
import {UploadService} from '../afficher/upload.service';
import {Boutique} from '../../Model/Boutique';
import {NgForm} from '@angular/forms';
import {UpdateService} from './update.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-update-boutique',
  templateUrl: './update-boutique.component.html',
  styleUrls: ['./update-boutique.component.css']
})
export class UpdateBoutiqueComponent implements OnInit {
  boutique1: Boutique;
  http: string;
  visibility = false;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private updateboutique: UpdateService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.value);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
            console.log(this.boutique1.visite);
          }
        );
      }
    );
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique1.id}`];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotomodifier(){
  }
  gotoproduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  show(){
    console.log(this.visibility);
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }
  gotoabonnement(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'Abonnement'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  update(formulaire: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.updateboutique.updatetilisateur(params.id , formulaire.value).subscribe(
          (response) => {
            const link = ['boutique' + `/${params.id}`];
            this.router.navigate(link, { skipLocationChange: true });
          },
          (error) => {
            console.log(error);
          }
        );
      });
  }
}
