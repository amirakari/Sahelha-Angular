import {Utilisateur} from './Utilisateur';
import {Boutique} from './Boutique';

export class Abonnement{
  id: number;
  durée: string;
  status: string;
  prix: number;
  boutique: Boutique;

  constructor( id, durée, status, prix, boutique) {
    this.id = id;
    this.durée = durée;
    this.status = status;
    this.prix = prix;
    this.boutique = boutique;
  }
}
