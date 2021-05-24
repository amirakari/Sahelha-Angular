import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../../liste-boutique/liste.service';
import {Boutique} from '../../Model/Boutique';
import {ProduitBoutiqueService} from './produit-boutique.service';
import {Produit} from '../../Model/Produit';
import {EvaluationService} from '../../page-boutique/evaluation.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {AffService} from '../../utilisateur/profilutilisateur/aff.service';

@Component({
  selector: 'app-produit-boutique',
  templateUrl: './produit-boutique.component.html',
  styleUrls: ['./produit-boutique.component.css']
})
export class ProduitBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  boutique1: Boutique;
  totalRecords: number;
  page = 1;
  val: object;
  user: Utilisateur;
  statis: boolean;
  constructor(private router: Router,
              private profiluserservice: AffService,
              private activatedRoute: ActivatedRoute,
              private listemService: ListeService,
              private evaluationService: EvaluationService,
              private listeService: ProduitBoutiqueService, ) { }

  ngOnInit(): void {
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
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link);
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link);
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique1.id}`];
    this.router.navigate(link);
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
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
  gotoDetailsProduit( produitId: number){
    this.activatedRoute.params.subscribe(
      (params) => {
        const link = ['boutique' + `/${params.id}` + '/produitboutique' + `/${produitId}` ];
        this.router.navigate(link);

        });

  }
}
