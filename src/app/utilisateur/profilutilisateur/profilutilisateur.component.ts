import {Component, Input, OnInit, Output} from '@angular/core';
import {ListeService} from '../../liste-boutique/liste.service';
import {Boutique} from '../../Model/Boutique';
import {AffService} from './aff.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {NgForm} from '@angular/forms';
import {ImageService} from './image.service';
import {UploadService} from './upload.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-profilutilisateur',
  templateUrl: './profilutilisateur.component.html',
  styleUrls: ['./profilutilisateur.component.css']
})
export class ProfilutilisateurComponent implements OnInit {
  constructor(private profiluserservice: AffService,
              public loginService: LoginService,
              private userservice: UserService,
              private router: Router,
              private imageservice: ImageService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService) { }
   file: any;
   user: Utilisateur;
  status: boolean;
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
  }
  gotoboutique(){
    const link = ['profilutilisateur' + '/boutique'];
    this.router.navigate(link);
  }
  UploadImage(event: any){
       this.file = event.target.files[0];
       const formData = new FormData();
       formData.append('file', this.file);
       this.uploadService.UploadImage(this.user.id, formData).subscribe(
        (response) => {
          console.log(this.file.name);
        },
        (error) => {
          alert(`erreur d'accés à l'api`);
          console.log(error);
        }
      );
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
  modifier(id: number){
    const link = ['/profilutilisateur/update' , id];
    this.router.navigate(link);
  }
  supprimerUtilisateur(id: number){
    this.userservice.supprimertilisateur(id).subscribe(
      (response) => {
        console.log(id);
      },
      (error) => {
        console.log(error);
      }
    );
    this.loginService.logout();
  }
}
