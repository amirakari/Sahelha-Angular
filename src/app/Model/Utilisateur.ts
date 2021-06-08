export class Utilisateur{
  id: number;
  nom: string;
  prenom: string;
  numtel: number;
  adresse: string;
  type: string;
  mail: string;
  password: string;
  photodeprofil: string;
  deletedAt: Date;

  constructor( id, nom, prenom, mail, password, adresse, numtel, type, photodeprofil) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.numtel = numtel;
    this.adresse = adresse;
    this.type = type;
    this.mail = mail;
    this.password = password;
    this.photodeprofil = photodeprofil;
  }
}
