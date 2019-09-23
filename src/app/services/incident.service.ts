import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Incident } from '../models/incident';
import { Object } from '../models/object';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Case2 } from '../models/case2';
import { Case3 } from '../models/case3';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private host2:string="http://localhost:8080/incident-service";
  private host:string="http://localhost:8080/incident-service/incidents";
  public nbElementParPage=100;

  constructor(private http:HttpClient,private authService:AuthService) { }

  getHeader(){
    return new HttpHeaders({'authorization':'Bearer '+this.authService.jwtToken});
  }

  getIncident(){
     let url=this.host+"/search/userIncidentUserIdAgent?idagent="+this.authService.user.id;
    return this.http.get<Object>(url,{headers:this.getHeader()});
  }

  getCase1(){
    return this.http.get<Object>(this.host2+"/case1s",{headers:this.getHeader()});
  }

  getCase2(){
    return this.http.get<Case2[]>(this.host2+"/case22s",{headers:this.getHeader()});
  }

  getCase3(){
    return this.http.get<Case3[]>(this.host2+"/case33",{headers:this.getHeader()});
  }
  getIncidentParEtat(url:string,type:string){
     let suffix="?idagent="+this.authService.user.id+"&etat=";
        if(type=='valider')suffix=suffix+true;
        if(type=='nonValider')suffix=suffix+false;
        url=url+suffix;
      //  console.log("url="+url);

    return this.http.get<Object>(this.host+url,{headers:this.getHeader()});
  }

 


getTypeIncidentForTechnicien(type:string){
     let url=undefined;
  if(type=='valider') url=this.host+"/search/technicienincidentValider?type="+this.authService.user.specialite;
 else if(type=='nonValider') url=this.host+"/search/technicienincidentNonValider?type="+this.authService.user.specialite;
 

 
  
    
  return this.http.get<Object>(url,{headers:this.getHeader()});
}

getTypeIncidentForAdmin(type:string,numpage){
  let url=undefined;
if(type=='valider') url=this.host+"/search/incidentValider";
else if(type=='nonValider') url=this.host+"/search/incidentNonValider";

let suffix="?page="+numpage+"&size="+this.nbElementParPage+"&sort=id,desc"

url=url+suffix;

 
return this.http.get<Object>(url,{headers:this.getHeader()});
}

  creeIncident(incident:Incident){

    return this.http.post<Incident>(this.host,incident,{headers:this.getHeader()});
  }

  registerIncident(data){

    return this.http.post(this.host2+'/services',data,{headers:this.getHeader()});
  }

  updateIncident(incident:Incident){
    return this.http.put(`${this.host}/${incident.id}`,incident,{headers:this.getHeader()});
  }

  deleteIncident(id:number){
    return this.http.delete(`${this.host}/${id}`,{headers:this.getHeader()});
  }

  uploadPhoto(file:File,numPhoto):Observable<HttpEvent<{}>>{
    
    let formdata:FormData=new FormData();
    formdata.append('file',file);
    

    const req=new HttpRequest('POST',this.host2+'/uploadPhoto/'+numPhoto,formdata,{
      headers:this.getHeader(),
      reportProgress:true,
      responseType:'text'
    })

    return this.http.request(req);

  }

  presisteIncident(idUser,idIncident,etat){

    let ladate=new Date();
    return this.http.patch(`${this.host}/${idIncident}`,{'idtechnicien':idUser,'etat':etat,'dataClouture':ladate.getFullYear()});
  }

  getAllServices(){
    return this.http.get<Object>(this.host2+'/services');
  }


}
