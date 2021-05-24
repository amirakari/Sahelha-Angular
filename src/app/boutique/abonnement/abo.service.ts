import { Injectable } from '@angular/core';
import {Abonnement} from '../../Model/Abonnement';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboService {
  link = 'http://localhost:3000/abonnement';
  constructor(
  ) {
  }
}
