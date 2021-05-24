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
@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  boutique1: Boutique;
  file: any;
  lat: number;
  lng: number;
  controllerSrc: any;
  url1: string;
  user: Utilisateur;
  status: boolean;
  statis: boolean;
  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private profiluserservice: AffService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
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
