import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public passwordActuel:string='';
  public passwordNouveau:string='';
  public confirmation:string='';
  public error1:string;
  public error2:string;
  public isOk:boolean=false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  changePassword(){
    this.error1='';
    this.error2='';
  if(this.passwordActuel!='' && this.passwordNouveau!='' && this.confirmation!='' && this.passwordNouveau==this.confirmation){
    this.authService.verifiePassword(this.passwordActuel).subscribe(
      (data)=>{
        if(data){
          this.authService.changePassword(this.passwordNouveau).subscribe(
            ()=>{
              this.isOk=!this.isOk;
              this.error1='';
              this.error2='';
              this.confirmation='';
              this.passwordNouveau='';
              this.passwordActuel='';
            }
          );
        }
        else{
          this.error1='Mot de passe incorrect';
        }
      }
    );
  }
  else{
    if(this.passwordActuel=='')this.error1='Entre Mot de passe valider';
    if(this.passwordNouveau=='' )this.error2='Entre Mot de passe valider';
  }
  }

}
