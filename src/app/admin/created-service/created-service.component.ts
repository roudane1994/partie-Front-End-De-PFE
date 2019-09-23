import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-service',
  templateUrl: './created-service.component.html',
  styleUrls: ['./created-service.component.css']
})
export class CreatedServiceComponent implements OnInit {

  public isError:boolean=false;
  public error:string;
  @Output() changeMode=new EventEmitter<string>();

  constructor(private incidentService:IncidentService,private router:Router) { }

  ngOnInit() {
  }

  onRegister(formData){
    this.incidentService.registerIncident(formData)
    .subscribe(resp=>{
     this.changeMode.emit('gestionService');
     
    },
    err=>{
    this.isError=true;
    this.error=err.error.message;
    //console.log(err.error.message);
    })
    }

}
