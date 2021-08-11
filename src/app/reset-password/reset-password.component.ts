import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ForgotPasswordService} from '../forgot-password/forgot-password.service';
import {NgForm} from '@angular/forms';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';
import {UpdateService} from '../utilisateur/updateuser/update.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../utilisateur/profilutilisateur/image.service';
import {UploadService} from '../utilisateur/profilutilisateur/upload.service';
import {ResetService} from './reset.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private utilisateurs: Utilisateur[];
  e = true;
  link = 'http://localhost:3000/utilisateur/forgotPassword';
  constructor(private userService: ResetService,
              private profiluserservice: AffService,
              private updateservice: UpdateService,
              private router: Router,
              private imageservice: ImageService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService) { }

  ngOnInit(): void {
  }
  update(formulaire: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.userService.updatetilisateur(params.id , formulaire.value).subscribe(
          (response) => {
            const link = [''];
            this.router.navigate(link, { skipLocationChange: true });
          },
          (error) => {
            console.log(error);
          }
        );
      });
  }
  login1(){
    const link = [''];
    this.router.navigate(link, { skipLocationChange: true });
  }
  changer(){
    if (this.e){
      document.getElementById('restore-email-inline').setAttribute('type', 'text');
      this.e = false;
    } else {
      document.getElementById('restore-email-inline').setAttribute('type', 'password');
    }
  }
}
