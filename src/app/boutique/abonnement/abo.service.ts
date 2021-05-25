import { Injectable } from '@angular/core';
import {Abonnement} from '../../Model/Abonnement';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboService {
  link = environment.http + '/abonnement';
  constructor(
  ) {
  }
}
