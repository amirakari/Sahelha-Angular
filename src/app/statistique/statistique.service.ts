import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  link = environment.http + '/commande';
  constructor(private http: HttpClient) { }
  getCommandeEnJanvier(id: number){
    const link1 = this.link + '/Janvier' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnFevier(id: number){
    const link1 = this.link + '/Fevrier' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnMars(id: number){
    const link1 = this.link + '/Mars' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnAvril(id: number){
    const link1 = this.link + '/Avril' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnMai(id: number){
    const link1 = this.link + '/Mai' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnJuin(id: number){
    const link1 = this.link + '/Juin' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnJuillet(id: number){
    const link1 = this.link + '/Juillet' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnAout(id: number){
    const link1 = this.link + '/Aout' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnSeptembre(id: number){
    const link1 = this.link + '/Septembre' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnOctobre(id: number){
    const link1 = this.link + '/Octobre' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnNovembre(id: number){
    const link1 = this.link + '/Novembre' + `/${id}`;
    return  this.http.get(link1);
  }
  getCommandeEnDecembre(id: number){
    const link1 = this.link + '/Decembre' + `/${id}`;
    return  this.http.get(link1);
  }
}
