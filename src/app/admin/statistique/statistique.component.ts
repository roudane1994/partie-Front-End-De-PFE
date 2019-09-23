import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { Case1 } from 'src/app/models/case1';
import { Chart } from 'chart.js';  
import { StatistiqueServiceService } from 'src/app/services/statistique-service.service';
import { Case2 } from 'src/app/models/case2';
import { Case3 } from 'src/app/models/case3';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  public case1:Case1[];
  public case2:Case2[];
  public case3:Case3[];
  public case33:Case3[];

   reseaux:Case2[];
  logiciel:Case2[];
  system:Case2[];

  X = [];  
  Y = []; 
  Linechart = []; 
  barChart=[];
  line2Chart=[];
  pieChar=[];
  pieChartAnneAndMateriel=[];
  annee:string="2010";
  annee2:string="2010";
  type:string="Reseaux";

  constructor(private incidentService:IncidentService,private statistiqueService:StatistiqueServiceService) { }

  
  
  ngOnInit() {
   this.getCase1();
   this.getCase2();
   this.initchangerParAnneAndType();
  }

  getCase1(){
  
    this.incidentService.getCase1().subscribe(
      (data)=>{
     
      this.case1=data._embedded.case1s;

      this.case1.sort((a,b)=>a.annee-b.annee);

      this.case1.forEach(data=>{
        this.X.push(data.annee);  
        this.Y.push(data.nb);  
      });

      this.Linechart = this.statistiqueService.getCase1(this.X,this.Y);
 

      
      }
        
      
    );
  }

  getCase2(){
   
    let X=[];
    let Y=[];
    let Z=[];
    this.incidentService.getCase2().subscribe(
      (data)=>{

        this.case2=data;
        this.reseaux=this.case2.filter((data)=>data.type=="Reseaux").sort((a,b)=>a.dataAjoute-b.dataAjoute);
        this.logiciel=this.case2.filter((data)=>data.type=="Logiciel").sort((a,b)=>a.dataAjoute-b.dataAjoute);
        this.system=this.case2.filter((data)=>data.type=="Systeme").sort((a,b)=>a.dataAjoute-b.dataAjoute);
        this.reseaux.forEach(data=>{X.push(data.nb);});
        this.logiciel.forEach(data=>{Y.push(data.nb);});
        this.system.forEach(data=>{Z.push(data.nb);});
        this.barChart=this.statistiqueService.getCase2(X,Y,Z);
        this.line2Chart=this.statistiqueService.getCase3(X,Y,Z);
       this.changerParAnne();
       
    
      }
    );

   
  }
  changerParAnne(){
       let x,y,z;
       this.reseaux.forEach((data)=>{
         if(data.dataAjoute==this.annee)x=data.nb;
       });
       this.logiciel.forEach((data)=>{
        if(data.dataAjoute==this.annee)y=data.nb;
      });
      this.system.forEach((data)=>{
        if(data.dataAjoute==this.annee)z=data.nb;
      });
    this.pieChar=this.statistiqueService.getCase4(x,y,z,this.annee);

  }
  initchangerParAnneAndType(){
   
    this.incidentService.getCase3().subscribe(
      (data)=>{
        
    this.case3=data;
    this.changerParAnneAndType();
    
   
      }
    );
    
  }

  changerParAnneAndType(){
    
    let x,y,z,w;

    this.case33=this.case3.filter(data=>data.type==this.type && data.dataAjoute==this.annee2)

   this.case33.forEach((data=>{ 
     if(data.materiel=="pc fixe")x=data.nb;
     else if(data.materiel=="pc portable")y=data.nb;
     else if(data.materiel=="imprimante")z=data.nb;
     else if(data.materiel=="mobile")w=data.nb;
    }));

   this.pieChartAnneAndMateriel=this.statistiqueService.getCase5(x,y,z,w,this.annee2);
  }

 

}
