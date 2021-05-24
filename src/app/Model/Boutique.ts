import {Utilisateur} from './Utilisateur';

export class Boutique{
  id: number;
  nom: string;
  domaine: string;
  mailprofessionnelle: string;
  adresse: string;
  horaire: string;
  photo: string;
  visite: string;
  facebook: string;
  instagram: string;
  mapLat: number;
  mapLng: number;
  user: Utilisateur;

  constructor( id, nom, domaine, mailprofessionnelle, adresse, horaire, photo, visite, user) {
    this.id = id;
    this.nom = nom;
    this.domaine = domaine;
    this.mailprofessionnelle = mailprofessionnelle;
    this.adresse = adresse;
    this.horaire = horaire;
    this.photo = photo;
    this.visite = visite;
    this.user = user;
  }
}
