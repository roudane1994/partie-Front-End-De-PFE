import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import{Incident} from '../../models/incident';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-list-incident',
  templateUrl: './list-incident.component.html',
  styleUrls: ['./list-incident.component.css']
})
export class ListIncidentComponent implements OnInit {

  @Input() incidents:Incident[];
  @Input() incidents2:Incident[];
  @Output() shareDataToParent = new EventEmitter();
  @Output() deleteIncident = new EventEmitter();
   searchTitre='';
  item:Incident;

  constructor(private incidentService:IncidentService) { }

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
}

  editIncident(incident:Incident){
    this.shareDataToParent.emit(incident);
  }

  deleteTask(id:number){
     

   this.deleteIncident.emit(id);
  }

  searchIncident(){
    this.incidents2=this.incidents.filter((incident)=>incident.titre.toLowerCase().includes(this.searchTitre.toLowerCase()));

  }

  detailIncident(incident:Incident){
    this.item=incident;
  }

  getUrlImage(){
    return 'http://localhost:8082/photoPoduct/'+this.item.extention;
  }


}
