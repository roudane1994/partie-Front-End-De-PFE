import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IncidentService } from 'src/app/services/incident.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  public mode:string;

  public id=this.authService.user.nom;

  

  constructor(private route:ActivatedRoute,private authService:AuthService,private incidentService:IncidentService) { }

  ngOnInit() {
    this.mode= this.route.snapshot.params.mode
    //this.mode="";
  }
 
  changementDeMode(newMode:string){
    
    this.mode=newMode;
  }

}
