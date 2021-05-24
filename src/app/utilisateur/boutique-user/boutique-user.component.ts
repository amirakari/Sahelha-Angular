import {Component, Input, OnInit} from '@angular/core';
import {ListeService} from '../../liste-boutique/liste.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Boutique} from '../../Model/Boutique';
import {BoutiqueUserService} from './boutique-user.service';
import {AffService} from '../profilutilisateur/aff.service';
import {ImageService} from '../profilutilisateur/image.service';
import {UploadService} from '../profilutilisateur/upload.service';
import {Utilisateur} from '../../Model/Utilisateur';

@Component({
  selector: 'app-boutique-user',
  templateUrl: './boutique-user.component.html',
  styleUrls: ['./boutique-user.component.css']
})
export class BoutiqueUserComponent implements OnInit {
  @Input() boutique: Boutique[];
  @Input() boutique1: Boutique;
  @Input() user1: Utilisateur;
  totalRecords: number;
  page = 1;
  constructor(private listeService: BoutiqueUserService,
              private profiluserservice: AffService,
              private router: Router, ) { }
  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {
        this.user1 = user;
        this.listeService.getBoutique(user.id).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    ); });
  }
  afficherboutique(id: number){
    const link = [ 'boutique' , id ];
    this.router.navigate(link);
  }
  gotoprofil(){
    const link = ['profilutilisateur' ];
    this.router.navigate(link);
  }
}
