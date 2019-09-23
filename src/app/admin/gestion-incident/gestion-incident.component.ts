import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident';
import { IncidentService } from 'src/app/services/incident.service';
import { AuthService } from 'src/app/services/auth.service';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-gestion-incident',
  templateUrl: './gestion-incident.component.html',
  styleUrls: ['./gestion-incident.component.css']
})
export class GestionIncidentComponent implements OnInit {

  public incidents:Incident[];
  public resultIncident:Incident[];
  public item:Incident;
  public detail:boolean;
  searchText='';
  type='valider';
  public pageActuel:number=0;
  public tab;
  public page:Page;

  constructor(private incidentService:IncidentService,private authService:AuthService) { }

  ngOnInit() {
    
    this.init();
  }
  init(){
    this.item={
      type:"",
      titre:"",
      description:"",
      materiel:"",
      etat:false,
      idagent:125
    };
    this.getIncident();
}

  getIncident(){
    this.incidentService.getTypeIncidentForAdmin(this.type,this.pageActuel).subscribe(
      (data)=>{
        this.incidents=data._embedded.incidents;
        this.resultIncident=this.incidents;

       
        this.page=data.page;

        this.tab=new Array(this.page.totalPages);
      }
    );
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

  changerType(){
    this.pageActuel=0;
    this.getIncident();

  }

  changePage(i:number){
    if(this.page.totalPages>i && i>=0){
    this.pageActuel=i;
    this.init();
    console.log("page=="+i);
    }
  }
 
  

}
