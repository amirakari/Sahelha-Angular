import {Utilisateur} from './Utilisateur';

export class Boutique{
  id: number;
  nom: string;
  domaine: string;
  mailprofessionnelle: string;
  adresse: string;
  createdAt: Date;
  horaire: string;
  photo: string;
  visite: string;
  facebook: string;
  instagram: string;
  mapLat: number;
  mapLng: number;
  user: Utilisateur;

  constructor( id, nom, domaine, mailprofessionnelle, adresse, createdAt, horaire, photo, visite, user) {
    this.id = id;
    this.nom = nom;
    this.domaine = domaine;
    this.mailprofessionnelle = mailprofessionnelle;
    this.adresse = adresse;
    this.createdAt = createdAt;
    this.horaire = horaire;
    this.photo = photo;
    this.visite = visite;
    this.user = user;
  }
}
