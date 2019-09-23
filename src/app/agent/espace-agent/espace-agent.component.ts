import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident';
import { IncidentService } from '../../services/incident.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-espace-agent',
  templateUrl: './espace-agent.component.html',
  styleUrls: ['./espace-agent.component.css']
})
export class EspaceAgentComponent implements OnInit {

  public incidents:Incident[];
  public incident:Incident={
    type:'',
    titre:'',
    description:'',
    materiel:'',
    etat:false,
    idagent:12
  };
  public mode:string="list";
  public modeFile:string="add";
  public id=this.authService.user.nom;

  public liActive:string;

  constructor(private incidentService:IncidentService,private authService:AuthService) { }

  init(){
    
    this.incident={
      type:'',
      titre:'',
      description:'',
      materiel:'',
      etat:false,
      idagent:12
    };
  }

  ngOnInit() {

    this.getAllIncident();
   
  }

  getAllIncident(){

    this.incidentService.getIncident().subscribe(
      data=>{
        this.incidents=data._embedded.incidents;
        
       
      }
    );
  }

  change(mode){

    
    
    this.mode=mode;
    
  }

  addIncident(incident:Incident){
    this.init();
    this.incidents=[incident,...this.incidents];

   

  }

  chargerIncident(type:string){
    if(type=='valider')this.liActive='incidentActive';
    else if(type=='nonValider') this.liActive='incidentNonActive';
    this.mode='list';
    let url="/search/userIncidentUserIdAgentEtat";
    

    this.incidentService.getIncidentParEtat(url,type).subscribe(
      (data)=>{

        this.incidents=data._embedded.incidents;

      },
      (err)=>{
        console.log(err);
      }
    );


  }

  updateIncident(incident:Incident){

    this.modeFile="update";
    this.incident=incident;
    this.change("cree");

    
  }

  creeIncident(){
    this.liActive='creeIncident';
   this.init();
    this.modeFile="add";
    this.change("cree");

  }

  deleteIncident(id){
    this.incidentService.deleteIncident(id).subscribe(
      ()=>{
        this.incidents= this.incidents.filter(incident=> incident.id!=id);
        
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  

}
