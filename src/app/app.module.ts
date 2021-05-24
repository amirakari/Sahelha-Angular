import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PageBoutiqueComponent} from './page-boutique/page-boutique.component';
import {DetailsProduitComponent} from './details-produit/details-produit.component';
import {PayementComponent} from './payement/payement.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {ProfilComponent} from './boutique/profil/profil.component';
import {AfficherComponent} from './boutique/afficher/afficher.component';
import {ProduitBoutiqueComponent} from './boutique/produit-boutique/produit-boutique.component';
import {ProfilutilisateurComponent} from './utilisateur/profilutilisateur/profilutilisateur.component';
import {APP_BASE_HREF} from '@angular/common';
import {LoginGuard} from './guard/login.guard';
import {LogoutGuard} from './guard/logout.guard';
import {UserGuard} from './guard/user.guard';
import {LoginInterceptorProvider} from './interceptors/login.interceptor';
import {AjouterProduitComponent} from './ajouter-produit/ajouter-produit.component';
import {CommandeComponent} from './commande/commande.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UpdateuserComponent} from './utilisateur/updateuser/updateuser.component';
import {ContactComponent} from './contact/contact.component';
import {UpdateComponent} from './details-produit/update/update.component';
import {UpdateCommandeComponent} from './commande/update-commande/update-commande.component';
import {StatistiqueComponent} from './statistique/statistique.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {NgxCaptchaModule} from 'ngx-captcha';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {NgxPaginationModule} from 'ngx-pagination';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';
import {AgmCoreModule} from '@agm/core';
import {OrderListModule} from 'primeng/orderlist';
import {TableModule} from 'primeng/table';
import {DragDropModule} from 'primeng/dragdrop';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ListeBoutiqueComponent} from './liste-boutique/liste-boutique.component';
import {HttpComponent} from './http/http.component';
import {AbonnementComponent} from './boutique/abonnement/abonnement.component';
import {BoutiqueUserComponent} from './utilisateur/boutique-user/boutique-user.component';
import {BoutiqueDonComponent} from './boutique/boutique-don/boutique-don.component';
import {PdfComponent} from './pdf/pdf.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {UpdateBoutiqueComponent} from './boutique/update-boutique/update-boutique.component';
import {EvaluerProduitComponent} from './commande/evaluer-produit/evaluer-produit.component';
import {CommandesComponent} from './details-produit/commandes/commandes.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HeaderComponent,
    FooterComponent,
    PageBoutiqueComponent,
    DetailsProduitComponent,
    ListeBoutiqueComponent,
    PayementComponent,
    HttpComponent,
    AcceuilComponent,
    ProfilComponent,
    AfficherComponent,
    ProduitBoutiqueComponent,
    ProfilutilisateurComponent,
    AbonnementComponent,
    AjouterProduitComponent,
    CommandeComponent,
    BoutiqueUserComponent,
    BoutiqueDonComponent,
    PdfComponent,
    ForgotPasswordComponent,
    UpdateuserComponent,
    ResetPasswordComponent,
    UpdateBoutiqueComponent,
    ContactComponent,
    UpdateComponent,
    UpdateCommandeComponent,
    EvaluerProduitComponent,
    StatistiqueComponent,
    CommandesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxCaptchaModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    GooglePlaceModule,
    NgxPaginationModule,
    PanelModule,
    RatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyKbqeWTkZVdS99nz6SO3ypKlY_sJ2HRU',
      libraries: ['places']
    }),
    OrderListModule,
    TableModule,
    DragDropModule,
    SplitButtonModule,
  ],
  providers: [{provide: APP_BASE_HREF , useValue: '/'},
    LoginGuard, LogoutGuard, UserGuard, LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
