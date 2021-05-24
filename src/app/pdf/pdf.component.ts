import {Component, Input, OnInit} from '@angular/core';
import {Boutique} from '../Model/Boutique';
import {Utilisateur} from '../Model/Utilisateur';
import {BoutiqueUserService} from '../utilisateur/boutique-user/boutique-user.service';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';
import {PdfService} from './pdf.service';
import {Commande} from '../Model/commande';
import * as html2pdf from 'html2pdf.js';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  @Input() boutique1: Commande;
  constructor(private listeService: PdfService,
              private profiluserservice: AffService,
              private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.value);
        this.listeService.getBoutique(params.id).subscribe(
          (boutique) => { this.boutique1 = boutique; },
          (error) => {alert(`erreur d'accés à l'api`);
                      console.log(error); }
        ); }
    ); }
download(){
    const options = {
      name: 'coupon.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    };
    const element: Element = document.getElementById('amir');
    html2pdf()
      .from(element)
      .set(options)
      .save();
}
}
