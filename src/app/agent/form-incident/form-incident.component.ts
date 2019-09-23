import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Incident } from '../../models/incident';
import { IncidentService } from '../../services/incident.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.component.html',
  styleUrls: ['./form-incident.component.css']
})
export class FormIncidentComponent implements OnInit {

  incidentForm: FormGroup;
  @Output() annulee=new EventEmitter<string>();
  @Output() addIncident=new EventEmitter<Incident>();
  @Input() incident:Incident;
  @Input() mode:string;

  private SelectedFiles;
  private progress:number=0;
  currentFileUpload;
  private timestamp:number=0;
  private image:string="";
  private exiteImage:boolean=false;

  

  constructor(private formBuilder: FormBuilder,private incidentService:IncidentService,private authService:AuthService) { }

 

  ngOnInit() {
  
    this.initForm();
    
  }

  generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

  initForm() {
    this.incidentForm = this.formBuilder.group({
      type: [this.incident.type, Validators.required],
      materiel:[this.incident.materiel, Validators.required],
      titre:[this.incident.titre, Validators.required],
      description:[this.incident.description, Validators.required]

    });
}

onSubmitForm(){
  let ladate=new Date();
  const formValue = this.incidentForm.value;
   this.incident.type=formValue['type'];
   this.incident.materiel=formValue['materiel'];
   this.incident.titre=formValue['titre'];
   this.incident.description=formValue['description'];
  this.incident.dataAjoute=ladate.getFullYear().toString();
  this.incident.idagent=this.authService.user.id;
   if(this.mode=='add' || (this.mode=='update' && this.exiteImage)){
    this.incident.exitImg=this.exiteImage;
    this.incident.extention=this.image;
   }


  if(this.mode=="add"){
    let ladate=new Date();
    
   this.incidentService.creeIncident(this.incident).subscribe(
     (data)=>{
        this.addIncident.emit(data);
       this.annule();
     },
     (err)=>{
       console.log(err);
     }
   );
    }
    if(this.mode=="update"){
      this.incidentService.updateIncident(this.incident).subscribe(
        ()=>{
           
          this.annule();
        },
        (err)=>{
          console.log(err);
        }
      );

    }

   
}

annule(){

  this.annulee.emit("list");

}

onSelectedFile(event){

  this.SelectedFiles=event.target.files;
  this.uploadPhoto();

}

uploadPhoto(){
  let numPhoto=this.generate_random_string(10);
  this.currentFileUpload=this.SelectedFiles.item(0);

   this.image=numPhoto+'.'+this.currentFileUpload.name.split('.').pop();
  

  

  console.log("eeee=="+this.image);

  this.incidentService.uploadPhoto(this.currentFileUpload,numPhoto).subscribe(
    event=>{
      if(event.type===HttpEventType.UploadProgress){
        this.progress=Math.round(100*event.loaded/event.total);
      }
      else if(event instanceof HttpResponse){

        this.timestamp=Date.now();
        this.exiteImage=true;
        
      }
    },
    err=>{
      alert("error"+JSON.parse(err.error).message);
    }
  );

}
getWidth(){
    return this.progress+'%';
}

getUrlImage(){
  return this.authService.host+'/photoPoduct/'+this.incident.extention+'?ts='+this.getTs();
}

getTs(){

  return this.timestamp;
}

}
