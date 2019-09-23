import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent implements OnInit {


  public services;
  public service;
  constructor(private incidentService:IncidentService) { }

  ngOnInit() {
    this.getAllService();
  }

  getAllService(){
    this.incidentService.getAllServices().subscribe(
      (data)=>{
        this.services=data._embedded.services;
      },
      (error)=>{
        console.log(error);
      }
    );
     
  }
  detailService(service){
    this.service=service;
  }

}
