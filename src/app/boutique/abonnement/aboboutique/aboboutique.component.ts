import { Component, OnInit } from '@angular/core';
import {ListeService} from '../../../liste-boutique/liste.service';
import {Boutique} from '../../../Model/Boutique';
import {AboService} from '../abo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Abonnement} from '../../../Model/Abonnement';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-aboboutique',
  templateUrl: './aboboutique.component.html',
  styleUrls: ['./aboboutique.component.css']
})
export class AboboutiqueComponent implements OnInit {
  boutique1: Abonnement[];
  boutique2: Boutique;
  visibility = false;
  http: string;
  constructor(private router: Router,
              private listeService: AboService,
              private activatedRoute: ActivatedRoute,
              private listeService1: ListeService) { }

  ngOnInit(): void {
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService.getabobyboutique(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
          }
        );
      }
    );
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService1.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique2 = boutique;
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
    const link = ['boutique' + `/${this.boutique2.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link);
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique2.id}`];
    this.router.navigate(link);
  }
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique2.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link);
  }
  gotomodifier(){
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique2.id}` + '/' + 'statistique'];
    this.router.navigate(link);
  }
  gotoproduit(){
    const link = ['boutique' + `/${this.boutique2.id}` + '/' + 'produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['boutique' + `/${this.boutique2.id}` + '/' + 'Abonnement'];
    this.router.navigate(link);
  }
  deleteBoutique(id){
    this.listeService.deleteboutique(id).subscribe(
      (response) => {
        const link = [ 'boutique' + `/${this.boutique2.id}`];
        this.router.navigate(link);
      }
    );
  }
}
