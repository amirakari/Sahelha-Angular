import {Component, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';
import {Utilisateur} from '../Model/Utilisateur';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  user: Utilisateur;
  constructor(private profiluserservice: AffService, ) { }
  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }

}
