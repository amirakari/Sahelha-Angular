import { Component, OnInit } from '@angular/core';
import {ListeService} from '../../../liste-boutique/liste.service';
import {Boutique} from '../../../Model/Boutique';
import {AboService} from '../abo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Abonnement} from '../../../Model/Abonnement';
import {environment} from '../../../../environments/environment';
import {NgForm} from '@angular/forms';
import {Paymme} from '../../../Model/Paymme';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-aboboutique',
  templateUrl: './aboboutique.component.html',
  styleUrls: ['./aboboutique.component.css']
})
export class AboboutiqueComponent implements OnInit {
  boutique1: Abonnement[];
  boutique2: Boutique;
  visibility = false;
  vendor: number;
  amount: number;
  note: string;
  http: string;
  paymee: Paymme;
  url: string;
  status: boolean;
  urlSafe: SafeResourceUrl;
  constructor(private router: Router,
              private listeService: AboService,
              private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer,
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
  paiement(id){
    if (this.status){
      this.listeService.Paiement(id).subscribe(
        (ressponse) => {
          const link = ['boutique' + `/${this.boutique2.id}`];
          this.router.navigate(link);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  deleteBoutique(id){
    this.listeService.deleteboutique(id).subscribe(
      (response) => {
        const link = [ 'boutique' + `/${this.boutique2.id}`];
        this.router.navigate(link);
      }
    );
  }
  Paymee(id, vendor, amount, note){
    this.paymee = {vendor, amount, note};
    const json = JSON.stringify(this.paymee);
    this.listeService.ajouterMaClasse(this.paymee).subscribe(
      (response) => {
        this.url = 'https://sandbox.paymee.tn/gateway/' + `${response.data.token}`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        console.log(response.data.token);
        console.log(this.url);
        console.log(response);
        window.addEventListener('message', event => {
          if (event.data.event_id === 'paymee.complete') {
            // Execute Step 3
            // window.location.replace('https://sandbox.paymee.tn/api/v1/payments/' + `${response.data.token}` + '/check');
            this.listeService.CheckPaiement(response.data.token).subscribe(
              (reponse) => {
                console.log(response.status);
                this.status = true;
              }
            );
          }
        }, false);
      },
      (error) => {
        console.log(error);
        console.log(this.paymee);
      }
    );
  }
}
