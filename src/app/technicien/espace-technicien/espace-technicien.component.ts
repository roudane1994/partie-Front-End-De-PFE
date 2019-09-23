import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident';
import { IncidentService } from 'src/app/services/incident.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-espace-technicien',
  templateUrl: './espace-technicien.component.html',
  styleUrls: ['./espace-technicien.component.css']
})
export class EspaceTechnicienComponent implements OnInit {

  public incidents:Incident[];
  public resultIncident:Incident[];
  public item:Incident;
  public detail:boolean;
  searchText='';
  public id=this.authService.user.nom;
  public liactive:string;
  public mode:string;
 

  constructor(private incidentService:IncidentService,private router: Router,private authService:AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.init();
    this.getIncident(this.mode);
  /** 
    this.router.events.subscribe(
      events=>{
        if(events instanceof NavigationEnd){
          this.mode=this.route.snapshot.params['mode'];
          this.chargerIncident(this.mode); 
         
        }
      }
    );
    */
    
  }
  init(){
    this.mode='nonValider';
    console.log('mode=='+this.mode);
    this.item={
      type:"",
      titre:"",
      description:"",
      materiel:"",
      etat:false,
      idagent:125
    };
}

  getIncident(type){

    this.incidentService.getTypeIncidentForTechnicien(type).subscribe(
      (data)=>{
        this.incidents=data._embedded.incidents;
        this.resultIncident=this.incidents;
       
      
      },
      (error)=>{
        console.log("error"+error);
      }
    );
  }

  chargerIncident(type:string){

    this.liactive=type;
    this.getIncident(type);

    

  }
  detailIncident(incident:Incident){
    this.item=incident;
  }

  validerIncident(idIncident,etat:boolean){

    let idTechnicien=this.authService.user.id;

    this.incidentService.presisteIncident(idTechnicien,idIncident,etat).subscribe(
      ()=>{
        this.incidents= this.incidents.filter(incident=> incident.id!=idIncident);
        this.resultIncident=this.incidents.filter(incident=> incident.id!=idIncident);
      },
      (error)=>{
        console.log("error="+error);
      }
    );
    

  }

  getUrlImage(){
    return 'http://localhost:8082/photoPoduct/'+this.item.extention;
  }

  searchIncident(){
     
    
   this.resultIncident=this.incidents.filter((incident)=>incident.titre.toLowerCase().includes(this.searchText.toLowerCase()));
  }
 
  

}
