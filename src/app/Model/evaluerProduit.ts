import {Utilisateur} from './Utilisateur';
import {Boutique} from './Boutique';

export class EvaluerProduit{
  id: number;
  note: number;

  constructor( id, note) {
    this.id = id;
    this.note = note;
  }
}
