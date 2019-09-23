import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-technicien',
  templateUrl: './created-technicien.component.html',
  styleUrls: ['./created-technicien.component.css']
})
export class CreatedTechnicienComponent implements OnInit {

  public isError:boolean=false;
  public error:string;
  @Output() changeMode=new EventEmitter<string>();

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onRegister(formData){
    this.authService.registerTechicien(formData)
    .subscribe(resp=>{
     this.changeMode.emit('gestion-technicien');
     
    },
    err=>{
    this.isError=true;
    this.error=err.error.message;
    //console.log(err.error.message);
    })
    }

}
