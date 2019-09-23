import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IncidentService } from '../services/incident.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public isError:boolean=false;
  public error:string;
  public services:Service;

  constructor(private incidentService:IncidentService,private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.getAllService();
  }

  getAllService(){
    this.incidentService.getAllServices().subscribe(
      (data)=>{
      this.services=data._embedded.services;  
      }
    )
  }

  onRegister(formData){
    this.authService.register(formData)
    .subscribe(resp=>{
  
     this.router.navigateByUrl("/login");
    },
    err=>{
    this.isError=true;
    this.error=err.error.message;
    //console.log(err.error.message);
    })
    }

}
