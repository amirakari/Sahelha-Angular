import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../liste-boutique/liste.service';
import {UploadService} from '../boutique/afficher/upload.service';
import {Boutique} from '../Model/Boutique';
import {CalendarModule} from 'primeng/calendar';
import {NgForm} from '@angular/forms';
import {AjProduitService} from './aj-produit.service';
import Quagga from 'quagga';
import {$} from 'protractor';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';
import {Utilisateur} from '../Model/Utilisateur';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private profiluserservice: AffService,
              private listeService: ListeService,
              private uploadService: AjProduitService) { }
  boutique1: Boutique;
   mindate = new Date();
  value: Date;
  user: Utilisateur;
  codeabare: any;
  status: string;
  status1: boolean;
  statis: boolean;
  urls = [];
  ngOnInit(): void {
    console.log(this.status);
    if (this.status === 'à donner' ){
      this.status1 = true;
    }else {
      this.status1 = false;
    }
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService.getBoutiqueByid(params.id).subscribe(
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
    if ( navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function'){
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          numOfWorkers: navigator.hardwareConcurrency,
          target: document.querySelector('#camera'),
        },
        decoder: {
          readers: ['ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader']
        }
      },  (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        Quagga.start();
      });
      Quagga.onDetected( (result) => {
        console.log(result.codeResult.code);
        this.codeabare = result.codeResult.code;
      });
    }
  }
  changestatus(input){
      console.log(input.value);
      if (input.value === 'à donner'){
        this.status1 = true;
      }else {
        this.status1 = false;
      }
  }
  gotoajout(){
    const link = ['boutique' + `/${this.boutique1.id}`];
    this.router.navigate(link);
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
    this.router.navigate(link);
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
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
        this.uploadService.addUtilisateur(formulaire.value, this.codeabare, params.id).subscribe(
      (response) => {
        console.log(formulaire);
        const link = ['pageBoutique' ];
        this.router.navigate(link);
      },
      (error) => {
        console.log(formulaire.value);
      }
    ); }
    );

  }
}
