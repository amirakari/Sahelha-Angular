import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.css']
})
export class ListeusersComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router, ) { }
  @Input() user1: Utilisateur[];
  http: string;
  status1: boolean;
  totalRecords: number;
  page = 1;
  items: MenuItem[];
  ngOnInit(): void {
    this.http = environment.http;
    this.userService.getUsers().subscribe(
      (user) => {
        this.user1 = user;
        this.totalRecords = user.length;
         });
  }
  bloquer(id: number){
    this.userService.supprimertilisateur(id).subscribe(
      (user) => {
        const link = ['listeusers'];
        this.router.navigate(link);
      });
  }
}
