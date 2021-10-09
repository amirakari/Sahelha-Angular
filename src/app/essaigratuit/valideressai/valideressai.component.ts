import { Component, OnInit } from '@angular/core';
import {Boutique} from '../../Model/Boutique';
import {Abonnement} from '../../Model/Abonnement';
import {Paymme} from '../../Model/Paymme';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {EssaigratuitService} from '../essaigratuit.service';
import {AfficheService} from '../../boutique/afficher/affiche.service';
import {ListeService} from '../../liste-boutique/liste.service';
import {AboService} from '../../boutique/abonnement/abo.service';
import {UploadService} from '../../boutique/afficher/upload.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-valideressai',
  templateUrl: './valideressai.component.html',
  styleUrls: ['./valideressai.component.css']
})
export class ValideressaiComponent implements OnInit {
  boutique1: Boutique;
  boutique3: Abonnement[];
  visibility = false;
  payement: boolean;
  boutique2: Boutique;
  http: string;
  url: string;
  note: string;
  status: boolean;
  status1: boolean;
  paymee: Paymme;
  amir: boolean;
  urlSafe: SafeResourceUrl;
  constructor(private router: Router,
              private aboService: EssaigratuitService,
              private activatedRoute: ActivatedRoute,
              private afficheService: AfficheService,
              private listeService: ListeService,
              private listeService1: AboService,
              public sanitizer: DomSanitizer,
              private uploadService: UploadService
  ) { }
  ngOnInit(): void {
    this.status1 = false;
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
        this.listeService1.getabobyboutique(params.id).subscribe(
          (boutique) => {
            this.boutique3 = boutique;
            console.log(this.boutique3.length);
            if (this.boutique3.length < 1){
              this.amir = true;
            }else {
              this.amir = false;
            }
          }
        );
      }
    );
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique2 = boutique;
          }
        );
      }
    );
  }
  paiement(id){
    this.aboService.Paiement(id).subscribe(
      (ressponse) => {
        const link = ['boutique' + `/${this.boutique1.id}`];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
        console.log(id);
      }
    );
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
    this.aboService.ajouterMaClasse(this.paymee).subscribe(
      (response) => {
        console.log(response);
        this.url = 'https://sandbox.paymee.tn/gateway/' + `${response.data.token}`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        console.log(response.data.token);
        console.log(this.url);
        console.log(response);
        window.addEventListener('message', event => {
          if (event.data.event_id === 'paymee.complete') {
            // Execute Step 3
            // window.location.replace('https://sandbox.paymee.tn/api/v1/payments/' + `${response.data.token}` + '/check');
            this.aboService.CheckPaiement(response.data.token).subscribe(
              (reponse) => {
                console.log(response.data.token);
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
    console.log(this.boutique3.length);
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.aboService.addAbo1(params.id).subscribe(
          (response) => {
            this.status1 = true;
            const link = ['valideressai'];
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
