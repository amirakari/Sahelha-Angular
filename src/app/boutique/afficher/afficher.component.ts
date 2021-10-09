import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AfficheService} from './affiche.service';
import {Boutique} from '../../Model/Boutique';
import {ListeService} from '../../liste-boutique/liste.service';
import {NgForm} from '@angular/forms';
import {UploadService} from './upload.service';
import { DomSanitizer} from '@angular/platform-browser';
import {AffService} from '../../utilisateur/profilutilisateur/aff.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {environment} from '../../../environments/environment';
import {Abonnement} from '../../Model/Abonnement';
import {AboService} from '../abonnement/abo.service';
@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  http: string;
  abonnements: Abonnement[];
  boutique1: Boutique;
  file: any;
  lat: number;
  lng: number;
  st: boolean;
  date = new Date();
  controllerSrc: any;
  url1: string;
  user: Utilisateur;
  status: boolean;
  payement: boolean;
  statis: boolean;
  amir: boolean;
  visibility = false;
  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private afficheService: AfficheService,
              private profiluserservice: AffService,
              private listeService47: AboService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.listeService47.getabobyboutique(params.id).subscribe(
          (boutique) => {
            this.abonnements = boutique;
            console.log(this.abonnements.length + 'aziz');
            if (this.abonnements.length < 2){
              this.amir = true;
            }else {
              this.amir = false;
            }
          }
        );
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
            // tslint:disable-next-line:max-line-length
            const str = this.boutique1.createdAt.toString();
            const str1 = this.date.getMonth() + 1;
            console.log(str1.toString() + 'kg');
            // tslint:disable-next-line:max-line-length
            if (str[5].concat(str[6]) === str1.toString()){
              this.st = true;
            }else{
              this.st = false;
            }
            console.log(!this.st + 'amir');
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
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
            const url = this.boutique1.visite;
            this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            console.log(this.controllerSrc);
            this.lat = boutique.mapLat;
            this.lng = boutique.mapLng;
            this.profiluserservice.getUtilisateur().subscribe(
              (user) => {this.user = user;
                         if (this.user.id === this.boutique1.user.id){
                                      this.status = true;
                                    }else{
                                      this.status = false;
                                    }
                         console.log(this.user.id);
                         console.log(this.boutique1.user.id);
                          },
              (error) => {alert(`erreur d'accés à l'api`);
                          console.log(error); }
            );
          }
        );
      }
    );
  }
  deleteBoutique(){
    this.listeService.deleteboutique(this.boutique1.id).subscribe(
      (response) => {
        const link = [ 'boutique' ];
        this.router.navigate(link);
      }
    );
  }
  gotostatistique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'statistique'];
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
  gotoessaigratuit(){
      const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'essaigratuit'];
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
  show(){
    console.log(this.visibility);
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }
  gotoaboboutique(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'AfficherAbo'];
    this.router.navigate(link);
  }
  UploadImage(event: any){
    this.file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.file);
    this.uploadService.UploadImage(this.boutique1.id, formData).subscribe(
      (response) => {
        console.log(this.file.name);
      },
      (error) => {
        alert(`erreur d'accés à l'api`);
        console.log(error);
      }
    );
  }
  modifier(){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.value);
        const link = ['/boutique' + `/${params.id}` + '/update'];
        this.router.navigate(link);
  } ); }
}
