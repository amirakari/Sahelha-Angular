import {Component, Input, OnInit} from '@angular/core';
import {DetailsProduitService} from '../../details-produit/details-produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Produit} from '../../Model/Produit';
import {NgForm} from '@angular/forms';
import {EvaluerService} from './evaluer.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-evaluer-produit',
  templateUrl: './evaluer-produit.component.html',
  styleUrls: ['./evaluer-produit.component.css']
})
export class EvaluerProduitComponent implements OnInit {
  @Input() boutique: Produit;
  http: string;
  val: number;
  constructor(private listeService: DetailsProduitService,
              private activatedRoute: ActivatedRoute,
              private evaluerService: EvaluerService,
              private router: Router, ) { }

  ngOnInit(): void {
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        this.listeService.getBoutique(params.idproduit).subscribe(
          (boutique) => { this.boutique = boutique;
                          console.log(this.boutique); }
        );
      });
  }
  addEvaluation(idboutique, idproduit){
    this.activatedRoute.params.subscribe(
      (params) => {
        this.evaluerService.evaluerProduit(params.idproduit, this.val, null ).subscribe(
          (response) => {
            const link = ['boutique' + `/${idboutique}` + '/produitboutique' + `/${idproduit}`];
            this.router.navigate(link);
            console.log();
          },
          (error) => {
            console.log(error);
          }
        ); });
  }
}
