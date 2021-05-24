import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AfficherComponent} from './boutique/afficher/afficher.component';
import {LoginGuard} from './guard/login.guard';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {LogoutGuard} from './guard/logout.guard';
import {ProfilutilisateurComponent} from './utilisateur/profilutilisateur/profilutilisateur.component';
import {ProduitBoutiqueComponent} from './boutique/produit-boutique/produit-boutique.component';
import {ProfilComponent} from './boutique/profil/profil.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {PageBoutiqueComponent} from './page-boutique/page-boutique.component';
import {ListeBoutiqueComponent} from './liste-boutique/liste-boutique.component';
import {DetailsProduitComponent} from './details-produit/details-produit.component';
import {AbonnementComponent} from './boutique/abonnement/abonnement.component';
import {PayementComponent} from './payement/payement.component';
import {AjouterProduitComponent} from './ajouter-produit/ajouter-produit.component';
import {CommandeComponent} from './commande/commande.component';
import {BoutiqueUserComponent} from './utilisateur/boutique-user/boutique-user.component';
import {BoutiqueDonComponent} from './boutique/boutique-don/boutique-don.component';
import {PdfComponent} from './pdf/pdf.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UpdateuserComponent} from './utilisateur/updateuser/updateuser.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {UpdateBoutiqueComponent} from './boutique/update-boutique/update-boutique.component';
import {ContactComponent} from './contact/contact.component';
import {UpdateComponent} from './details-produit/update/update.component';
import {EvaluerProduitComponent} from './commande/evaluer-produit/evaluer-produit.component';
import {StatistiqueComponent} from './statistique/statistique.component';
import {CommandesComponent} from './details-produit/commandes/commandes.component';
const Routes: Routes = [
  {path: 'acceuil', component:  AcceuilComponent},
  {path: 'contact', component:  ContactComponent},
  {path: '', component:  UtilisateurComponent},
  {path: 'forgotPassword', component:  ForgotPasswordComponent, canActivate: [LogoutGuard]},
  {path: 'resetPassword/:id', component:  ResetPasswordComponent, canActivate: [LogoutGuard]},
  {path: 'profilutilisateur', children : [
      {path: '', component: ProfilutilisateurComponent , canActivate: [LoginGuard]},
      {path: 'update/:id', component: UpdateuserComponent , canActivate: [LoginGuard]},
      {path: 'boutique', component: BoutiqueUserComponent , canActivate: [LoginGuard]},
    ]},
  {path: 'pageBoutique', component:  PageBoutiqueComponent},
  {path: 'commande', children : [
      {path: '', component:  CommandeComponent , canActivate: [LoginGuard]},
      {path: ':id', component:  PdfComponent , canActivate: [LoginGuard]},
    ]},
  {path: 'boutique', children : [
      {path: '' , component : ListeBoutiqueComponent},
      {path: 'addBoutique', component:  ProfilComponent , canActivate: [LoginGuard]},
      {path: ':id', children : [
          {path: '', component:  AfficherComponent, canActivate: [LoginGuard]},
          {path: 'statistique', component:  StatistiqueComponent, canActivate: [LoginGuard]},
          {path: 'update', component: UpdateBoutiqueComponent , canActivate: [LoginGuard]},
          {path: 'ajouterProduit', component:  AjouterProduitComponent},
          {path: 'produitboutique', children : [
              {path: '', component:  ProduitBoutiqueComponent},
              {path: 'don', component:  BoutiqueDonComponent},
              {path: ':idproduit' , children : [
                  {path: '', component:  DetailsProduitComponent},
                  {path: 'evaluer', component:  EvaluerProduitComponent},
                  {path: 'update', component:  UpdateComponent},
                  {path: 'commandes', component:  CommandesComponent},
                ]},
            ]},
          {path: 'Abonnement' , component : AbonnementComponent},
        ]}
    ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
