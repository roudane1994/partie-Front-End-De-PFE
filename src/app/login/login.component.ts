import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError:boolean=false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(formData){
    this.authService.login(formData)
    .subscribe(resp=>{
    let jwtToken=resp.headers.get('authorization');
     this.authService.saveToken(jwtToken);
     this.authService.trouveUser(this.authService.username).subscribe(
       (data)=>{
         this.authService.user=data;
         this.authService.saveUser();
         if(this.authService.isAdmin())this.router.navigateByUrl("/espaceAdmin/gestionAgent");
        else if(this.authService.isTechnicien())this.router.navigateByUrl("/espaceTechnicien");
         else this.router.navigateByUrl("/espaceAgent");
         
       }
     );
    },
    err=>{
    this.isError=true;
    })
    }

    onCreate(){
      this.router.navigateByUrl("/register");
    }

}
