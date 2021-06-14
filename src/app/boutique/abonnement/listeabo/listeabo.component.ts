import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {AboService} from '../abo.service';
import {ListeService} from '../../../liste-boutique/liste.service';
import {Abonnement} from '../../../Model/Abonnement';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-listeabo',
  templateUrl: './listeabo.component.html',
  styleUrls: ['./listeabo.component.css']
})
export class ListeaboComponent implements OnInit {
  totalRecords: number;
  page = 1;
  items: MenuItem[];
  boutique1: Abonnement[];
  http: string;
  constructor(private router: Router,
              private listeService: AboService,
              private activatedRoute: ActivatedRoute,
              private listeService1: ListeService) { }

  ngOnInit(): void {
    this.http = environment.http;
    this.listeService.getabo().subscribe(
      (boutique) => {
        this.boutique1 = boutique;
        this.totalRecords = boutique.length;
      }
    );
  }

}
