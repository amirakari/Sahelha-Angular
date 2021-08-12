import {Component, Input, OnInit} from '@angular/core';
import {CommandeService} from '../../commande/commande.service';
import {CommandesService} from './commandes.service';
import {Commande} from '../../Model/commande';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  @Input() boutique: Commande[];
  http: string;
  totalRecords: number;
  page = 1;
  constructor(private listeService: CommandesService,
              private listeService4: CommandeService,
              private activatedRoute: ActivatedRoute,
              private router: Router, ) { }

  ngOnInit(): void {
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService.getCommande(params.idproduit).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    ); });
  }
  supprimerCommande(id, idproduit, quantite, idboutique){
    this.listeService4.supprimerCommande(id).subscribe(
      (response) => {
        this.listeService4.CommandeProduit(idproduit, quantite, null).subscribe(
          (boutique) => {
            const link = ['boutique' + `/${idboutique}` + '/produitboutique' + `/${idproduit}`];
            this.router.navigate(link);
          }
        );
        console.log();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
