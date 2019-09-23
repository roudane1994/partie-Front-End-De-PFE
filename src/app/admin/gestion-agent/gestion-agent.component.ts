import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IncidentService } from 'src/app/services/incident.service';
import { User } from 'src/app/models/user';
import { Page } from 'src/app/models/page';


@Component({
  selector: 'app-gestion-agent',
  templateUrl: './gestion-agent.component.html',
  styleUrls: ['./gestion-agent.component.css']
})
export class GestionAgentComponent implements OnInit {

  public agents:User[];
  public agent:User;
  public page:Page;
  public pageActuel:number=0;
  public etat:boolean=false;
  private searchText:string='agentActive';
 public tab;

  constructor(private authService:AuthService,private incidentService:IncidentService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.agent={
      id:'',
    email:'',
    nom:'',
    prenom:'',
    telephone:'',
    specialite:'',
    password:'',
    actived:'',
    roles:''
    };
    
  if(this.searchText=="agentActive")  this.etat=true;
  else this.etat=false;
    this.getIncident(this.etat,this.pageActuel);

    
  }

  
  getIncident(etat:boolean,numPage:number){
    this.authService.getAgent(etat,numPage).subscribe(
      (data)=>{
        this.agents=data._embedded.appUsers;
        
        this.page=data.page;

        this.tab=new Array(this.page.totalPages);
    

       
      },
      (error)=>{
        console.log('error');
      }
    );

  }

  detailAgent(agent:User){
   this.agent=agent;
  }

  changeEtatAgent(idAgent:number,etat:boolean){

    this.authService.presisteUser(idAgent,etat).subscribe(
      ()=>{
        this.agents= this.agents.filter(agent=> agent.id!=idAgent);
      }
    );

  }

  searchAgent(){
    console.log("oo="+this.searchText);
    this.pageActuel=0;
    this.init();

  }

  changePage(i:number){
    if(this.page.totalPages>i && i>=0){
    this.pageActuel=i;
    this.init();
    console.log("page=="+i);
    }
  }


}
