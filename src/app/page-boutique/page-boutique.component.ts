import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {Produit} from '../Model/Produit';
import {PbService} from './pb.service';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {Boutique} from '../Model/Boutique';
import {ListeService} from '../liste-boutique/liste.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-page-boutique',
  templateUrl: './page-boutique.component.html',
  styleUrls: ['./page-boutique.component.css']
})
export class PageBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  @Input() boutique1: Boutique[];
  totalRecords: number;
  page = 1;
  val: number;
  lat: number;
  lng: number;
  inputSearchpartype: string = null;
  constructor(private router: Router,
              private listeService: PbService,
              private listeService1: ListeService, ) {
  }
  @ViewChild('placesRef', {static: false}) placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);
  }
  ngOnInit(): void {
    this.lat = 36.87736913231115;
    this.lng = 10.100964380174375;
    this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(this.boutique); },
      (error) => {alert(`erreur d'accés à l'api`);
        }
    );
    this.listeService1.getBoutique().subscribe(
      (boutique1) => { this.boutique1 = boutique1; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }
  gotodetails(idBoutique: number, idProduit: number){
    const link = ['boutique' + `/${idBoutique}` + '/produitboutique' + `/${idProduit}` ];
    this.router.navigate(link);
  }
  private getUserLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
findByName(nom){
    console.log(nom.value);
    this.listeService.findByName(nom).subscribe(
      (boutique) => { this.boutique = boutique;
                      console.log(this.boutique);
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
}
  findBytype(type){
    console.log(type);
    this.listeService.findByType(type).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(type); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
  }
  findByStatus(type){
    console.log(type);
    this.listeService.findByStatus(type).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(type); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
  }
  findByLocalisation(adreese){
    console.log(adreese);
    this.listeService.findByLocalisation(adreese).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(adreese); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
    if (adreese.value === 'Manouba'){
      this.lat = 36.80857712009718;
      this.lng = 10.086972566367914;
    }
    if (adreese.value === 'Zarzis'){
      this.lat = 33.50745259366173;
      this.lng = 11.084637966991847;
    }
    if (adreese.value === 'Mornaguia'){
      this.lat = 36.758318117523906;
      this.lng = 10.017444497419682;
    }
    if (adreese.value === 'Borj amri'){
      this.lat = 36.71347415450484;
      this.lng = 9.882975386789939;
    }
    if (adreese.value === 'Jedaida'){
      this.lat = 36.85074971683339;
      this.lng = 9.928105713358464;
    }
    if (adreese.value === 'Douar Hicher'){
      this.lat = 36.82484681601563;
      this.lng = 10.09643539155119;
    }
    if (adreese.value === 'El Battan'){
      this.lat = 36.80244902848408;
      this.lng = 9.843175043545404;
    }
    if (adreese.value === 'Oued Ellil'){
      this.lat = 36.84252944111365;
      this.lng = 10.038688985131163;
    }
    if (adreese.value === 'Tebourba'){
      this.lat = 36.84018199461443;
      this.lng = 9.850938147059658;
    }
    if (adreese.value === 'Tunis'){
      this.lat = 36.802285106321875;
      this.lng = 10.170054531920181;
    }
    if (adreese.value === 'Bab El Bhar'){
      this.lat = 36.801159216018675;
      this.lng = 10.180136528414927;
    }
    if (adreese.value === 'Bab Souika'){
      this.lat = 36.8040350751332;
      this.lng = 10.16678352390585;
    }
    if (adreese.value === 'Carthage'){
      this.lat = 36.854500804183104;
      this.lng = 10.332996374336178;
    }
    if (adreese.value === 'Cité El Khadra'){
      this.lat = 36.83242901710824;
      this.lng = 10.20864532171872;
    }
    if (adreese.value === 'Djebel Djelloud'){
      this.lat = 36.77246825635621;
      this.lng = 10.205717766257122;
    }
    if (adreese.value === 'El Kabaria'){
      this.lat = 36.76134054889024;
      this.lng = 10.192029766697118;
    }
    if (adreese.value === 'El Hrairia'){
      this.lat = 36.79152789916304;
      this.lng = 10.089892603059447;
    }
    if (adreese.value === 'El Menzah'){
      this.lat = 36.836573827992794;
      this.lng = 10.19263015891721;
    }
    if (adreese.value === 'El Omrane'){
      this.lat = 36.81618382680715;
      this.lng = 10.162353185625054;
    }
    if (adreese.value === 'El Omrane Supérieur'){
      this.lat = 36.84426522601611;
      this.lng = 10.131795133694798;
    }
    if (adreese.value === 'El Ouardia'){
      this.lat = 36.76628532684794;
      this.lng = 10.189254906779924;
    }
    if (adreese.value === 'Ettahrir'){
      this.lat = 36.824599091912525;
      this.lng = 10.127007911879241;
    }
    if (adreese.value === 'Ezzouhour(Tunis)'){
      this.lat = 36.79801626670141;
      this.lng = 10.136097550462289;
    }
    if (adreese.value === 'La Goulette'){
      this.lat = 36.81965676480891;
      this.lng = 10.304032924759037;
    }
    if (adreese.value === 'La Marsa'){
      this.lat = 36.889111864488775;
      this.lng = 10.321572242701476;
    }
    if (adreese.value === 'Medina'){
      this.lat = 36.79784158966093;
      this.lng = 10.168707631158485;
    }
    if (adreese.value === 'Le Bardo'){
      this.lat = 36.81448747567415;
      this.lng = 10.140538723258002;
    }
    if (adreese.value === 'Sijoumi'){
      this.lat = 36.77147258316551;
      this.lng = 10.170445337207445;
    }
    if (adreese.value === 'Sidi El Béchir'){
      this.lat = 36.79277908774087;
      this.lng = 10.179018217836505;
    }
    if (adreese.value === 'Sidi Hassine'){
      this.lat = 36.7573948801937;
      this.lng = 10.107308195827684;
    }
    if (adreese.value === 'Ben arous'){
      this.lat = 36.75755449465264;
      this.lng = 10.23052688700854;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'El Mourouj'){
      this.lat = 36.736839654214016;
      this.lng = 10.208463179550364;
    }
    if (adreese.value === 'Ezzahra'){
      this.lat = 36.744829621729856;
      this.lng = 10.307361142519051;
    }
    if (adreese.value === 'Fouchana'){
      this.lat = 36.696892352853034;
      this.lng = 10.165806557713633;
    }
    if (adreese.value === 'Hammam Chott'){
      this.lat = 36.717987806134396;
      this.lng = 10.369012352900015;
    }
    if (adreese.value === 'Hammam Lif'){
      this.lat = 36.72331159047002;
      this.lng = 10.34547985380342;
    }
    if (adreese.value === 'La Nouvelle Medina'){
      this.lat = 36.74461184744988;
      this.lng = 10.245268469175246;
    }
    if (adreese.value === 'Megrine'){
      this.lat = 36.77622802658982;
      this.lng = 10.231974576157471;
    }
    if (adreese.value === 'Mohamedia'){
      this.lat = 36.67614553243354;
      this.lng = 10.15348765023274;
    }
    if (adreese.value === 'Mornag'){
      this.lat = 36.68474490677659;
      this.lng = 10.28714727203345;
    }
    if (adreese.value === 'Rades'){
      this.lat = 36.77308711061307;
      this.lng = 10.2773399672118;
    }
    if (adreese.value === 'Ariana'){
      this.lat = 36.866243579951906;
      this.lng = 10.165724482825217;
    }
    if (adreese.value === 'Ettadhamen'){
      this.lat = 36.8359390509493;
      this.lng = 10.1002549158887;
    }
    if (adreese.value === 'Kalaat el Andalous'){
      this.lat = 37.06141631128517;
      this.lng = 10.118984285232687;
    }
    if (adreese.value === 'Mnihla'){
      this.lat = 36.84653756710231;
      this.lng = 10.117320785062683;
    }
    if (adreese.value === 'Raoued'){
      this.lat = 36.94852296257177;
      this.lng = 10.19729688002629;
    }
    if (adreese.value === 'Sidi Thabet'){
      this.lat = 36.92495028815047;
      this.lng = 36.92495028815047;
    }
    if (adreese.value === 'Soukra'){
      this.lat = 36.87895276260946;
      this.lng = 10.26503106991116;
    }
    if (adreese.value === 'Bizerte Nord'){
      this.lat = 37.27642848587209;
      this.lng = 9.8635763607326;
    }
    if (adreese.value === 'Bizerte Sud'){
      this.lat = 37.25683970853218;
      this.lng = 9.67006275592922;
    }
    if (adreese.value === 'Djoumine'){
      this.lat = 36.92803246318601;
      this.lng = 9.384031939427015;
    }
    if (adreese.value === 'El Alia'){
      this.lat = 37.17293476175481;
      this.lng = 10.032684646677028;
    }
    if (adreese.value === 'Ghezala'){
      this.lat = 37.08450467732325;
      this.lng = 9.534115642329926;
    }
    if (adreese.value === 'Mateur'){
      this.lat = 37.039058935600515;
      this.lng = 9.664415175665443;
    }
    if (adreese.value === 'Menzel Bourguiba'){
      this.lat = 37.14440192442013;
      this.lng = 9.787530348772373;
    }
    if (adreese.value === 'Menzel Jemil'){
      this.lat = 37.23802344583091;
      this.lng = 9.91900405336067;
    }
    if (adreese.value === 'Ras Jabel'){
      this.lat = 37.22540359500104;
      this.lng = 10.12617564826305;
    }
    if (adreese.value === 'Sejenane'){
      this.lat = 37.059851293182724;
      this.lng = 9.2402100788063;
    }
    if (adreese.value === 'Tinja'){
      this.lat = 37.163541984368095;
      this.lng = 9.76508609964091;
    }
    if (adreese.value === 'Utique'){
      this.lat = 36.99569454428368;
      this.lng = 9.879237729033214;
    }
    if (adreese.value === 'Zarzouna'){
      this.lat = 37.25041733306394;
      this.lng = 9.877829348719205;
    }
    if (adreese.value === 'Béja Nord'){
      this.lat = 36.80229592661394;
      this.lng = 9.227955225471257;
    }
    if (adreese.value === 'Béja Sud'){
      this.lat = 36.659232423953384;
      this.lng = 9.181486642651112;
    }
    if (adreese.value === 'Amdoun'){
      this.lat = 36.773201265712586;
      this.lng = 9.083280960821659;
    }
    if (adreese.value === 'Goubellat'){
      this.lat = 36.54562507530009;
      this.lng = 9.660397043128796;
    }
    if (adreese.value === 'Medjez El Bab'){
      this.lat = 36.648518032498195;
      this.lng = 9.617113885335241;
    }
    if (adreese.value === 'Nefza'){
      this.lat = 36.97759745972463;
      this.lng = 9.077753911438164;
    }
    if (adreese.value === 'Teboursouk'){
      this.lat = 36.46083603822377;
      this.lng = 9.243401753800566;
    }
    if (adreese.value === 'Testour'){
      this.lat = 36.55036148004976;
      this.lng = 9.442942092925103;
    }
    if (adreese.value === 'Tibar'){
      this.lat = 36.52336463550682;
      this.lng = 9.101829103854413;
    }
    if (adreese.value === 'Kairoun Nord'){
      this.lat = 35.671870371409845;
      this.lng = 10.104340949705756;
    }
    if (adreese.value === 'Kairoun Sud'){
      this.lat = 35.58870297443967;
      this.lng = 10.226562210706932;
    }
    if (adreese.value === 'Alaa'){
      this.lat = 35.61444147741762;
      this.lng = 9.56232970490327;
    }
    if (adreese.value === 'Bou Hajla'){
      this.lat = 35.35632104354062;
      this.lng = 10.16866585717472;
    }
    if (adreese.value === 'Chebika'){
      this.lat = 34.31641807139728;
      this.lng = 7.933118387474183;
    }
    if (adreese.value === 'Echrarda'){
      this.lat = 35.118872740167895;
      this.lng = 10.031032633331941;
    }
    if (adreese.value === 'Haffouz'){
      this.lat = 35.63699878499909;
      this.lng = 9.675843635574676;
    }
    if (adreese.value === 'Hajeb El Ayoun'){
      this.lat = 35.39231087381209;
      this.lng = 9.542398423593173;
    }
    if (adreese.value === 'Nasrallah'){
      this.lat = 35.353560118474896;
      this.lng = 9.830191571112119;
    }
    if (adreese.value === 'Oueslatia'){
      this.lat = 35.85117612628766;
      this.lng = 9.584669880421009;
    }
    if (adreese.value === 'Sbikha'){
      this.lat = 35.933029652724294;
      this.lng = 10.021255218881699;
    }
    if (adreese.value === 'Jendouba Nord'){
      this.lat = 36.527324549467224;
      this.lng = 8.671121794566298;
    }
    if (adreese.value === 'Jendouba Sud'){
      this.lat = 36.504113678148734;
      this.lng = 8.77477153656069;
    }
    if (adreese.value === 'Ain Draham'){
      this.lat = 36.77486525448674;
      this.lng = 8.686301738076713;
    }
    if (adreese.value === 'Balta'){
      this.lat = 36.705324997449345;
      this.lng = 8.945264899430569;
    }
    if (adreese.value === 'Bou Aouane'){
      this.lat = 36.64190010516867;
      this.lng = 8.973190231613838;
    }
    if (adreese.value === 'Bou Salem'){
      this.lat = 36.6098590428684;
      this.lng = 8.973780085742128;
    }
    if (adreese.value === 'Fernana'){
      this.lat = 36.66087909997058;
      this.lng = 8.684756757832256;
    }
    if (adreese.value === 'Ghardimaou'){
      this.lat = 36.4499382833446;
      this.lng = 8.437757390407473;
    }
    if (adreese.value === 'Oued Meliz'){
      this.lat = 36.47505495570046;
      this.lng = 8.579976696264964;
    }
    if (adreese.value === 'Tabarka'){
      this.lat = 36.94755438669152;
      this.lng = 8.74176957797503;
    }
    if (adreese.value === 'Kasserine Nord'){
      this.lat = 35.21199767637654;
      this.lng = 8.755199935214323;
    }
    if (adreese.value === 'Kasserine Sud'){
      this.lat = 35.117307774141096;
      this.lng = 8.695641890208748;
    }
    if (adreese.value === 'El Ayoun'){
      this.lat = 35.53533746395569;
      this.lng = 8.885784516474226;
    }
    if (adreese.value === 'Ezzouhour(Jendouba)'){
      this.lat = 36.45561040841489;
      this.lng = 8.436162482489888;
    }
    if (adreese.value === 'Fériana'){
      this.lat = 34.94002617499912;
      this.lng = 8.566814578275718;
    }
    if (adreese.value === 'Foussana'){
      this.lat = 35.347404862180035;
      this.lng = 8.629234976046398;
    }
    if (adreese.value === 'Haidra'){
      this.lat = 35.565675693994535;
      this.lng = 8.443207719213653;
    }
    if (adreese.value === 'Hassi El Ferid'){
      this.lat = 34.97810329500445;
      this.lng = 8.942099840913176;
    }
    if (adreese.value === 'Jedelienne'){
      this.lat = 35.591277883444015;
      this.lng = 9.055867150909382;
    }
    if (adreese.value === 'Majel Bel Abbés'){
      this.lat = 34.74862881319412;
      this.lng = 8.521013204496446;
    }
    if (adreese.value === 'Sbeitla'){
      this.lat = 35.22926886945378;
      this.lng = 9.126871620049073;
    }
    if (adreese.value === 'Sbiba'){
      this.lat = 35.54587926300428;
      this.lng = 9.073290806329902;
    }
    if (adreese.value === 'Thala'){
      this.lat = 35.58335129989553;
      this.lng = 8.667191964764259;
    }
    if (adreese.value === 'Kef Est'){
      this.lat = 36.14816602914632;
      this.lng = 8.707036541187309;
    }
    if (adreese.value === 'Kef Ouest'){
      this.lat = 36.15715971739584;
      this.lng = 8.697465053219968;
    }
    if (adreese.value === 'Dahmani'){
      this.lat = 35.94344206525091;
      this.lng = 8.83034704858829;
    }
    if (adreese.value === 'Jérissa'){
      this.lat = 35.84662099600935;
      this.lng = 8.63538261933825;
    }
    if (adreese.value === 'El Ksour'){
      this.lat = 35.88762352900453;
      this.lng = 8.888218359455106;
    }
    if (adreese.value === 'Sers'){
      this.lat = 36.0771629140623;
      this.lng = 9.02046197735722;
    }
    if (adreese.value === 'Kalaat Khasba'){
      this.lat = 35.657537894014126;
      this.lng = 8.589935211259686;
    }
    if (adreese.value === 'Kalaat Senan'){
      this.lat = 35.823660226589794;
      this.lng = 8.35921338353257;
    }
    if (adreese.value === 'Nebeur'){
      this.lat = 36.30012473829245;
      this.lng = 8.770622244293028;
    }
    if (adreese.value === 'Sakiet Sidi Youssef'){
      this.lat = 36.2237971335755;
      this.lng = 8.359254549210657;
    }
    if (adreese.value === 'Tajerouine'){
      this.lat = 35.89006607344685;
      this.lng = 8.552148355492909;
    }
    if (adreese.value === 'Gabés'){
      this.lat = 33.88763905779651;
      this.lng = 10.097851586366415;
    }
    if (adreese.value === 'Gabés Ouest'){
      this.lat = 33.87926547117605;
      this.lng = 9.929054700789713;
    }
    if (adreese.value === 'Gabes Sud'){
      this.lat = 33.816621311158535;
      this.lng = 10.045185255487327;
    }
    if (adreese.value === 'Ghannouch'){
      this.lat = 33.94023007611629;
      this.lng = 10.06523562803151;
    }
    if (adreese.value === 'El Hama'){
      this.lat = 33.876871235888004;
      this.lng = 9.734564089114778;
    }
    if (adreese.value === 'Matmata'){
      this.lat = 33.45058064467458;
      this.lng = 9.783716774736787;
    }
    if (adreese.value === 'Mareth'){
      this.lat = 33.62867038463598;
      this.lng = 10.287966591347944;
    }
    if (adreese.value === 'Manzel El Habbib'){
      this.lat = 34.233576214836496;
      this.lng = 9.595518358323444;
    }
    if (adreese.value === 'Métouia'){
      this.lat = 33.95703692142919;
      this.lng = 10.005913749696491;
    }
    if (adreese.value === 'Nouvelle Matmata'){
      this.lat = 33.66587783815577;
      this.lng = 10.015404779273254;
    }
    if (adreese.value === 'Mahdia'){
      this.lat = 35.50354320266041;
      this.lng = 11.04450375703159;
    }
    if (adreese.value === 'Bou Merdés'){
      this.lat = 35.44891044303534;
      this.lng = 10.722312381866761;
    }
    if (adreese.value === 'Chebba'){
      this.lat = 35.23471495919678;
      this.lng = 11.114644829318555;
    }
    if (adreese.value === 'Chorbane'){
      this.lat =  35.28506966702889;
      this.lng = 10.386887496316536;
    }
    if (adreese.value === 'El Djem'){
      this.lat = 35.292742067806195;
      this.lng = 10.709695654658814;
    }
    if (adreese.value === 'Essouassi'){
      this.lat = 35.34134878136084;
      this.lng = 10.548419888421204;
    }
    if (adreese.value === 'Hebira'){
      this.lat = 35.16798420854433;
      this.lng = 10.228850896264271;
    }
    if (adreese.value === 'Ksour Essef'){
      this.lat = 35.417573941074686;
      this.lng = 10.994846716766606;
    }
    if (adreese.value === 'Mellouléche'){
      this.lat = 35.16559687204544;
      this.lng = 11.030831216805563;
    }
    if (adreese.value === 'Ouled Chamekh'){
      this.lat = 35.49195299499405;
      this.lng = 10.31820525234598;
    }
    if (adreese.value === 'Sidi Alouane'){
      this.lat = 35.375237050771155;
      this.lng = 10.939378680018333;
    }
    if (adreese.value === 'Kebili'){
      this.lat = 33.70730899913892;
      this.lng = 8.971023314756712;
    }
    if (adreese.value === 'Douz'){
      this.lat = 33.46184036921238;
      this.lng = 9.029023468298671;
    }
    if (adreese.value === 'El Golaa'){
      this.lat = 33.483553361495595;
      this.lng = 9.004068354935418;
    }
    if (adreese.value === 'Souk Lahad'){
      this.lat = 33.7767147043293;
      this.lng = 8.859637579817448;
    }
    if (adreese.value === 'Siliana'){
      this.lat = 36.089128523319594;
      this.lng = 9.36352725113245;
    }
    if (adreese.value === 'Bou Arada'){
      this.lat = 36.34762270172157;
      this.lng = 9.624817380952939;
    }
    if (adreese.value === 'Gaafour'){
      this.lat = 36.323232478283046;
      this.lng = 9.326448360145617;
    }
    if (adreese.value === 'Sidi Bou Rouis'){
      this.lat = 36.176768327449594;
      this.lng = 9.12645226107053;
    }
    if (adreese.value === 'Maktar'){
      this.lat = 35.85648223888377;
      this.lng = 9.20199390250905;
    }
    if (adreese.value === 'Rouhia'){
      this.lat = 35.669233283525905;
      this.lng = 9.151945521315378;
    }
    if (adreese.value === 'Kesra'){
      this.lat = 35.81375871043779;
      this.lng = 9.36486841509402;
    }
    if (adreese.value === 'Bargou'){
      this.lat = 36.09235426728666;
      this.lng = 9.566860238757126;
    }
    if (adreese.value === 'El Aroussa'){
      this.lat = 36.377390704511626;
      this.lng = 9.451157949281212;
    }
    if (adreese.value === 'Nabeul'){
      this.lat = 36.453165172136906;
      this.lng = 10.719572853336185;
    }
    if (adreese.value === 'Béni Khalled'){
      this.lat = 36.649111524280066;
      this.lng = 10.592651083562325;
    }
    if (adreese.value === 'Béni Khiar'){
      this.lat = 36.46001628363941;
      this.lng = 10.782136683509433;
    }
    if (adreese.value === 'Bou Argoub'){
      this.lat = 36.53095567324163;
      this.lng = 10.550711282158248;
    }
    if (adreese.value === 'El Haouaria'){
      this.lat = 37.05341925028092;
      this.lng = 11.011729550574866;
    }
    if (adreese.value === 'El Mida'){
      this.lat = 36.727502873070144;
      this.lng = 10.853915552324104;
    }
    if (adreese.value === 'Grombalia'){
      this.lat = 36.602595706310886;
      this.lng = 10.501163030785223;
    }
    if (adreese.value === 'Hammamet'){
      this.lat = 36.4062678266224;
      this.lng = 10.621375924492954;
    }
    if (adreese.value === 'Hammam El Guezaz'){
      this.lat = 36.878726855514905;
      this.lng = 11.102721610475845;
    }
    if (adreese.value === 'Menzel Bouzelfa'){
      this.lat = 36.682753313679385;
      this.lng = 10.583337827145035;
    }
    if (adreese.value === 'Menzel Temime'){
      this.lat = 36.78093231420091;
      this.lng = 10.987456920756216;
    }
    if (adreese.value === 'Kélibia'){
      this.lat = 36.84521145322667;
      this.lng = 11.098980661923024;
    }
    if (adreese.value === 'Soliman'){
      this.lat = 36.69707571113932;
      this.lng = 10.491904769727384;
    }
    if (adreese.value === 'Takelsa'){
      this.lat = 36.79227097370424;
      this.lng = 10.628148026591026;
    }
    if (adreese.value === 'Dar Chaabane El Fehri'){
      this.lat = 36.46336615684961;
      this.lng = 10.75042238350886;
    }
    if (adreese.value === 'Sousse Médina'){
      this.lat = 35.823953383045286;
      this.lng = 10.634159514228818;
    }
    if (adreese.value === 'Sousse Jawhara'){
      this.lat = 35.83414893900969;
      this.lng = 10.623650398524166;
    }
    if (adreese.value === 'Sousse Riadh'){
      this.lat = 35.781870583721556;
      this.lng = 10.628365311366748;
    }
    if (adreese.value === 'Sousse Sidi abdelhamid'){
      this.lat = 35.79798649964139;
      this.lng = 10.656596516980139;
    }
    if (adreese.value === 'zaouia'){
      this.lat = 35.82776637918039;
      this.lng = 10.637027088777101;
    }
    if (adreese.value === 'Ksiba'){
      this.lat = 35.781497787562415;
      this.lng = 10.631582569387714;
    }
    if (adreese.value === 'Thrayet'){
      this.lat = 35.77634126377185;
      this.lng = 10.624925472035935;
    }
    if (adreese.value === 'Akouda'){
      this.lat = 35.87385228264314;
      this.lng = 10.571342411152955;
    }
    if (adreese.value === 'Bouficha'){
      this.lat = 36.299544407508044;
      this.lng = 10.453448267070176;
    }
    if (adreese.value === 'Enfidha'){
      this.lat = 36.13416553977262;
      this.lng = 10.37423621451582;
    }
    if (adreese.value === 'Hammam Sousse'){
      this.lat = 35.88680846164961;
      this.lng = 10.591052954750639;
    }
    if (adreese.value === 'Hergla'){
      this.lat = 36.030871251409295;
      this.lng = 10.504217063483393;
    }
    if (adreese.value === 'Kalaa Kebira'){
      this.lat = 35.86994695145362;
      this.lng = 10.53457752006305;
    }
    if (adreese.value === 'Kalaa Seghira'){
      this.lat = 35.82282135841194;
      this.lng = 10.566654195709386;
    }
    if (adreese.value === 'Kondar'){
      this.lat = 35.932301805519536;
      this.lng = 10.30075879431945;
    }
    if (adreese.value === 'M\'saken'){
      this.lat = 35.728092701553884;
      this.lng = 10.575970971932634;
    }
    if (adreese.value === 'Sid Bou Ali'){
      this.lat = 35.95822064820884;
      this.lng = 10.476777632751828;
    }
    if (adreese.value === 'Sidi El Hani'){
      this.lat = 35.67912104506875;
      this.lng = 10.322401777171104;
    }
    if (adreese.value === 'Sfax'){
      this.lat = 34.72924819881651;
      this.lng = 10.75700982842415;
    }
    if (adreese.value === 'Sakiet Ezzit'){
      this.lat = 34.80364930166795;
      this.lng = 10.762598841617251;
    }
    if (adreese.value === 'Chihia'){
      this.lat = 34.807810389014705;
      this.lng = 10.727977622612395;
    }
    if (adreese.value === 'Sakiet Eddaier'){
      this.lat = 34.79548117128212;
      this.lng = 10.786384962372503;
    }
    if (adreese.value === 'Gremda'){
      this.lat = 34.79173368964614;
      this.lng = 10.713858094948415;
    }
    if (adreese.value === 'El Ain'){
      this.lat = 34.771042501966946;
      this.lng = 10.692271678453231;
    }
    if (adreese.value === 'Thyna'){
      this.lat = 34.687054831540514;
      this.lng = 10.706927210005158;
    }
    if (adreese.value === 'Agareb'){
      this.lat = 34.74541710228819;
      this.lng = 10.529408315559964;
    }
    if (adreese.value === 'Jebiniana'){
      this.lat = 35.03516954988395;
      this.lng = 10.906913185307086;
    }
    if (adreese.value === 'El Hencha'){
      this.lat = 35.11530741696695;
      this.lng = 10.739779256832687;
    }
    if (adreese.value === 'Menzel Chaker'){
      this.lat = 34.96613599969121;
      this.lng = 10.355635109345828;
    }
    if (adreese.value === 'Ghraiba'){
      this.lat = 34.49543344217221;
      this.lng = 10.21307936445255;
    }
    if (adreese.value === 'Bir Ali Ben Khélifa'){
      this.lat = 34.735738249758036;
      this.lng = 10.087268535368827;
    }
    if (adreese.value === 'Skhira'){
      this.lat = 34.296860640196655;
      this.lng = 10.0757715524114;
    }
    if (adreese.value === 'Mahares'){
      this.lat = 34.52646186603613;
      this.lng = 10.491299363713333;
    }
    if (adreese.value === 'Kerkennah'){
      this.lat = 34.7025643726893;
      this.lng = 11.192450506453538;
    }
    if (adreese.value === 'Tataouine Nord'){
      this.lat = 32.778902292547734;
      this.lng = 10.228261986843934;
    }
    if (adreese.value === 'Tataouine Sud'){
      this.lat = 32.76097786199077;
      this.lng = 10.556278350441751;
    }
    if (adreese.value === 'Bir Lahmar'){
      this.lat = 33.14828716198994;
      this.lng = 10.577428410055582;
    }
    if (adreese.value === 'Dhehiba'){
      this.lat = 31.9264922803851;
      this.lng = 10.454710512674815;
    }
    if (adreese.value === 'Ghomrassen'){
      this.lat = 33.06438806884555;
      this.lng = 10.337748385935495;
    }
    if (adreese.value === 'Remada'){
      this.lat = 32.31317510090481;
      this.lng = 10.391306668350524;
    }
    if (adreese.value === 'Smar'){
      this.lat = 32.995214951562154;
      this.lng = 10.822065134074869;
    }
    if (adreese.value === 'Sidi Bouzid'){
      this.lat = 35.03442050980279;
      this.lng = 9.481243261127933;
    }
    if (adreese.value === 'Sidi Ali Ben Aoun'){
      this.lat = 34.85226767069507;
      this.lng = 9.140410257350426;
    }
    if (adreese.value === 'Regueb'){
      this.lat = 34.858268008554816;
      this.lng = 9.784877607856956;
    }
    if (adreese.value === 'Ouled Haffouz'){
      this.lat = 35.082120446628416;
      this.lng = 9.871247952634826;
    }
    if (adreese.value === 'Mezzouna'){
      this.lat = 34.57512648773872;
      this.lng = 9.839778208346694;
    }
    if (adreese.value === 'Meknassy'){
      this.lat = 34.606822248884576;
      this.lng = 9.606719303598657;
    }
    if (adreese.value === 'Menzel Bouziane'){
      this.lat = 34.5723879366382;
      this.lng = 9.426256393530315;
    }
    if (adreese.value === 'Cebbaka Ouled Askar'){
      this.lat = 35.2206485822749;
      this.lng = 9.296117412107638;
    }
    if (adreese.value === 'Bir El Hafey'){
      this.lat = 34.931081718371544;
      this.lng = 9.19589981490838;
    }
    if (adreese.value === 'Tozeur'){
      this.lat = 33.918180685245446;
      this.lng = 8.122672868087696;
    }
    if (adreese.value === 'Tameghza'){
      this.lat = 34.381711291740245;
      this.lng = 7.9490003678687575;
    }
    if (adreese.value === 'Nefta'){
      this.lat = 33.875020090377554;
      this.lng = 7.8786027041184585;
    }
    if (adreese.value === 'Hazoua'){
      this.lat = 33.738062429304584;
      this.lng = 7.598396413958138;
    }
    if (adreese.value === 'Degache'){
      this.lat = 33.99257991691052;
      this.lng = 8.228995625650938;
    }
    if (adreese.value === 'Monastir'){
      this.lat = 35.76290342948976;
      this.lng = 10.812498968663219;
    }
    if (adreese.value === 'Bekalta'){
      this.lat = 35.62039488268329;
      this.lng = 10.99497541577136;
    }
    if (adreese.value === 'Bembla'){
      this.lat = 35.689868111386645;
      this.lng = 10.766719440923646;
    }
    if (adreese.value === 'Beni Hassen'){
      this.lat = 35.5668883783759;
      this.lng = 10.815124436047899;
    }
    if (adreese.value === 'Jemmal'){
      this.lat = 35.62044523666785;
      this.lng = 10.759970992375514;
    }
    if (adreese.value === 'Ksar Hellal'){
      this.lat = 35.64571585688209;
      this.lng = 10.874748012246554;
    }
    if (adreese.value === 'Ksibet el-Médiouni'){
      this.lat = 35.688077870237215;
      this.lng = 10.841145330621732;
    }
    if (adreese.value === 'Moknine'){
      this.lat = 35.63246625050272;
      this.lng = 10.896077802415885;
    }
    if (adreese.value === 'Ouerdanine'){
      this.lat = 35.70934606899079;
      this.lng = 10.678236937593748;
    }
    if (adreese.value === 'Sahline'){
      this.lat = 35.75102976998539;
      this.lng = 10.711727655926175;
    }
    if (adreese.value === 'Sayada'){
      this.lat = 35.66193098526026;
      this.lng = 10.903377857801573;
    }
    if (adreese.value === 'Lamta'){
      this.lat = 35.67461476019826;
      this.lng = 10.876153596489537;
    }
    if (adreese.value === 'Bou Hajar'){
      this.lat = 35.66531501929889;
      this.lng = 10.859298615793094;
    }
    if (adreese.value === 'Zaghouan'){
      this.lat = 36.410049216945524;
      this.lng = 10.144491756169261;
    }
    if (adreese.value === 'Saouaf'){
      this.lat = 36.19587438584226;
      this.lng = 10.18054732853545;
    }
    if (adreese.value === 'Nadhour'){
      this.lat = 36.120980162898064;
      this.lng = 10.095459113021983;
    }
    if (adreese.value === 'El fahs'){
      this.lat = 36.37775582564666;
      this.lng = 9.910611937806646;
    }
    if (adreese.value === 'Zriba'){
      this.lat = 36.299415569668064;
      this.lng = 10.268257842334098;
    }
    if (adreese.value === 'Bir Mcherga'){
      this.lat = 36.51903425036229;
      this.lng = 9.954493029548267;
    }
    if (adreese.value === 'Medenine Nord'){
      this.lat = 33.427438239337306;
      this.lng = 10.585418309853415;
    }
    if (adreese.value === 'Medenine Sud'){
      this.lat = 33.385369809619625;
      this.lng = 10.355126834011783;
    }
    if (adreese.value === 'Ben Guardane'){
      this.lat = 33.143682589887966;
      this.lng = 11.214551302239052;
    }
    if (adreese.value === 'Beni Khedache'){
      this.lat = 33.24487830766215;
      this.lng = 10.200376499890103;
    }
    if (adreese.value === 'Djerba-Ajim'){
      this.lat = 33.73257312061611;
      this.lng = 10.759400718261963;
    }
    if (adreese.value === 'Djerba-Houmt Souk'){
      this.lat = 33.87229202206563;
      this.lng = 10.859382101314974;
    }
    if (adreese.value === 'Djerba-Midoun'){
      this.lat = 33.82180213149892;
      this.lng = 10.995125373313714;
    }
    if (adreese.value === 'Sidi Makhlouf'){
      this.lat = 33.50160881552989;
      this.lng = 10.478124526242166;
    }
  }

}
