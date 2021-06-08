import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../../liste-boutique/liste.service';
import {AjProduitService} from '../../ajouter-produit/aj-produit.service';
import {Boutique} from '../../Model/Boutique';
import {DetailsProduitService} from '../details-produit.service';
import {Produit} from '../../Model/Produit';
import {NgForm} from '@angular/forms';
import {UpdateService} from './update.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  http: string;
  mindate = new Date();
  value: Date;
  codeabare: any;
  boutique1: Boutique;
  @Input() boutique: Produit;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private liste1Service: DetailsProduitService,
              private uploadService: UpdateService) { }

  ngOnInit(): void {
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        this.liste1Service.getBoutique(params.idproduit).subscribe(
          (boutique1) => { this.boutique = boutique1;
                           console.log(this.boutique); }
        );
      });
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
          }
        );
      }
    );
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
    this.router.navigate(link);
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique1.id}`];
    this.router.navigate(link);
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link);
  }
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link);
  }
  gotomodifier(){
  }
  gotoproduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'Abonnement'];
    this.router.navigate(link);
  }
  addProduit(formulaire: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.uploadService.addUtilisateur(formulaire.value, params.idproduit).subscribe(
          (response) => {
            const link = ['boutique' + `/${params.id}` + '/produitboutique' + `/${params.idproduit}` ];
            this.router.navigate(link);
          },
          (error) => {
            console.log(formulaire.value);
          }
        ); }
    );

  }
}
