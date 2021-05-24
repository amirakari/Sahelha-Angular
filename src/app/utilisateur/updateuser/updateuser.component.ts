import { Component, OnInit } from '@angular/core';
import {AffService} from '../profilutilisateur/aff.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../profilutilisateur/image.service';
import {UploadService} from '../profilutilisateur/upload.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {NgForm} from '@angular/forms';
import {UpdateService} from './update.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private profiluserservice: AffService,
              private updateservice: UpdateService,
              private router: Router,
              private imageservice: ImageService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService) { }
  file: any;
  status: boolean;
  user: Utilisateur;
  userFile;
  imgURL: any;
  public imagePath;
  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user;
                 if (this.user.type === 'user'){
          this.status = false;
        }else {
          this.status = true;
        }},
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }
  gotoboutique(){
    const link = ['profilutilisateur' + '/boutique'];
    this.router.navigate(link);
  }
  gotoprofil(){
    const link = ['profilutilisateur'];
    this.router.navigate(link);
  }
  getPhotodeProfil(){
    this.imageservice.getImageProfil(this.user.photodeprofil).subscribe(
      (img) => {
        this.imgURL = img;
      },
      (error) => {
        console.log(this.user.photodeprofil);
        console.log(this.imgURL);
        alert(`erreur d'accés à l'api`);
        console.log(error);
      }
    );
  }
  update(formulaire: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.updateservice.updatetilisateur(params.id , formulaire.value).subscribe(
      (response) => {
        const link = ['profilutilisateur'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
      });
  }
}
