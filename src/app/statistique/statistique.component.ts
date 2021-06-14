import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ListeService} from '../liste-boutique/liste.service';
import {UploadService} from '../boutique/afficher/upload.service';
import {Boutique} from '../Model/Boutique';
import {StatistiqueService} from './statistique.service';
import {environment} from '../../environments/environment';
Chart.register(...registerables);
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  boutique1: Boutique;
  http: string;
  visibility = false;
  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private statistique: StatistiqueService,
              private uploadService: UploadService) { }
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  f: any;
  g: any;
  h: any;
  q: any;
  l: any;
  m: any;
  n: any;
  data = [];
  ngOnInit(): void {
    this.http = environment.http;
    this.activatedRoute.params.subscribe(
      (params) => {
        this.statistique.getCommandeEnJanvier(params.id).subscribe(
          (a) => {
            this.a = a;
            this.statistique.getCommandeEnMai(params.id).subscribe(
              (c) => {
                this.c = c;
                this.statistique.getCommandeEnFevier(params.id).subscribe(
                  (b) => {
                    this.b = b;
                    this.statistique.getCommandeEnMars(params.id).subscribe(
                      (d) => {
                        this.d = d;
                        this.statistique.getCommandeEnAvril(params.id).subscribe(
                          (e) => {
                            this.e = e;
                            this.statistique.getCommandeEnJuin(params.id).subscribe(
                              (f) => {
                                this.f = f;
                                this.statistique.getCommandeEnJuillet(params.id).subscribe(
                                  (g) => {
                                    this.g = g;
                                    this.statistique.getCommandeEnAout(params.id).subscribe(
                                      (h) => {
                                        this.h = h;
                                        this.statistique.getCommandeEnSeptembre(params.id).subscribe(
                                          (q) => {
                                            this.q = q;
                                            this.statistique.getCommandeEnOctobre(params.id).subscribe(
                                              (l) => {
                                                this.l = l;
                                                this.statistique.getCommandeEnNovembre(params.id).subscribe(
                                                  (m) => {
                                                    this.m = m;
                                                    this.statistique.getCommandeEnDecembre(params.id).subscribe(
                                                      (n) => {
                                                        this.n = n;
                                                        const barChart = new Chart('barChart', {
                                                          type: 'bar',
                                                          data: {labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                                                            datasets: [{
                                                              label: 'Nombre de vente par mois',
                                                              data: [this.a, this.b , this.d, this.e, this.c, this.f,
                                                                this.g, this.h, this.q, this.l, this.m, this.n],
                                                              backgroundColor: [
                                                                'rgba(255, 99, 132, 0.2)',
                                                                'rgba(54, 162, 235, 0.2)',
                                                                'rgba(255, 206, 86, 0.2)',
                                                                'rgba(75, 192, 192, 0.2)',
                                                                'rgba(153, 102, 255, 0.2)',
                                                                'rgba(255, 159, 64, 0.2)',
                                                                'rgba(128, 0, 0, 0.2)',
                                                                'rgb(128, 128, 128,0.2)',
                                                                'rgb(128, 128, 0,0.2)',
                                                                'rgb(0, 255, 0,0.2)',
                                                                'rgb(0, 0, 128,0.2)',
                                                                'rgb(0, 0, 0,0.2)',
                                                              ],
                                                              borderColor: [
                                                                'rgba(255,99,132,1)',
                                                                'rgba(54, 162, 235, 1)',
                                                                'rgba(255, 206, 86, 1)',
                                                                'rgba(75, 192, 192, 1)',
                                                                'rgba(153, 102, 255, 1)',
                                                                'rgba(255, 159, 64, 1)',
                                                                'rgba(128, 0, 0, 1)',
                                                                'rgb(128, 128, 128,1)',
                                                                'rgb(128, 128, 0,1)',
                                                                'rgb(0, 255, 0,1)',
                                                                'rgb(0, 0, 128,1)',
                                                                'rgb(0, 0, 0,1)',
                                                              ],
                                                              borderWidth: 1
                                                            }]
                                                          },
                                                          options: {
                                                            scales: {
                                                              y: {
                                                                beginAtZero: true
                                                              }
                                                            }
                                                          }
                                                        });
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.value);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
          }
        );
      }
    );
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
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
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
  show(){
    console.log(this.visibility);
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }
}
