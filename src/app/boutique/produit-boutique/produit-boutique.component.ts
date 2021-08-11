import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../../liste-boutique/liste.service';
import {Boutique} from '../../Model/Boutique';
import {ProduitBoutiqueService} from './produit-boutique.service';
import {Produit} from '../../Model/Produit';
import {EvaluationService} from '../../page-boutique/evaluation.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {AffService} from '../../utilisateur/profilutilisateur/aff.service';
import {environment} from '../../../environments/environment';
import {AfficheService} from '../afficher/affiche.service';
@Component({
  selector: 'app-produit-boutique',
  templateUrl: './produit-boutique.component.html',
  styleUrls: ['./produit-boutique.component.css']
})
export class ProduitBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  http: string;
  boutique1: Boutique;
  totalRecords: number;
  page = 1;
  val: object;
  payement: boolean;
  user: Utilisateur;
  statis: boolean;
  visibility = false;
  constructor(private router: Router,
              private profiluserservice: AffService,
              private activatedRoute: ActivatedRoute,
              private afficheService: AfficheService,
              private listemService: ListeService,
              private evaluationService: EvaluationService,
              private listeService: ProduitBoutiqueService, ) { }

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
        this.listemService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
            this.profiluserservice.getUtilisateur().subscribe(
              (user) => {this.user = user;
                         if (this.user.id === this.boutique1.user.id){
                  this.statis = true;
                }else{
                  this.statis = false;
                }
              },
              (error) => {alert(`erreur d'accés à l'api`);
                          console.log(error); }
            );
          }
        );
      }
    );
    this.activatedRoute.params.subscribe(
      (params) => {
        this.listeService.getBoutique(params.id).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length; }
    );
  });
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listemService.getBoutiqueByid(params.id).subscribe(
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
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique1.id}`];
    this.router.navigate(link, { skipLocationChange: true });
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
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
  gotoDetailsProduit( produitId: number){
    this.activatedRoute.params.subscribe(
      (params) => {
        const link = ['boutique' + `/${params.id}` + '/produitboutique' + `/${produitId}` ];
        this.router.navigate(link, { skipLocationChange: true });

        });

  }
}
