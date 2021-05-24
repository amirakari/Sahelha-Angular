import {Utilisateur} from './Utilisateur';
import {Boutique} from './Boutique';

export class Produit{
  id: number;
  categorie: string;
  DLC: Date;
  nom: string;
  codeabare: number;
  prixsansremise: number;
  prixavecremise: number;
  reference: string;
  createdAt: Date;
  quantite: number;
  status: string;
  photo1: string;
  boutique: Boutique;

  constructor( id, categorie, DLC, nom, codeabare, status, quantite, prixsansremise, prixavecremise, reference, photo1, boutique) {
    this.id = id;
    this.categorie = categorie;
    this.DLC = DLC;
    this.nom = nom;
    this.codeabare = codeabare;
    this.prixsansremise = prixsansremise;
    this.quantite = quantite;
    this.reference = reference;
    this.status = status;
    this.photo1 = photo1;
    this.boutique = boutique;
  }
}
