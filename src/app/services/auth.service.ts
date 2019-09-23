import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user';
import { Object } from '../models/object';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public host:string="http://localhost:8080/user-service";
  public host2:string="http://localhost:8080/user-service/appUsers";
  public username:string;
  public jwtToken:string;
public roles:Array<any>=[];
public user:User=null;
public nbElementParPage=3;

  constructor(private http:HttpClient) { }

  register(user){
    
    return this.http.post(this.host+"/registerUser",user,{ observe: 'response' });
    
}
registerTechicien(user){
    
  return this.http.post(this.host+"/registerTechnicien",user,{ observe: 'response' });
  
}



login(user){
    
  return this.http.post(this.host+"/login",user,{ observe: 'response' });
  
}

saveToken(jwtToken){

  this.jwtToken=jwtToken;
localStorage.setItem("token",jwtToken);

this.parseJWT();
}

saveUser(){

localStorage.setItem("user",btoa(JSON.stringify(this.user)));

this.parseJWT();
}

parseJWT(){
let jwtHelper=new JwtHelperService();
let objJwt=jwtHelper.decodeToken(this.jwtToken);
this.username=objJwt.username;
this.roles=objJwt.roles;
this.trouveUser(this.username);
console.log("roles"+this.roles);

}

trouveUser(email:string){
 return this.http.get<User>(this.host+"/trouveEmail/"+email);

}

isAdmin(){
  return this.roles.indexOf("ADMIN")>=0;
}

isUer(){
  return this.roles.indexOf("USER")>=0;
}
isTechnicien(){
  return this.roles.indexOf("TECHNICIEN")>=0;
}
isAuth(){
  return this.isUer() || this.isAdmin();
}

loadToken(){
  
  let token=localStorage.getItem("token");
  let user=localStorage.getItem("user");
  if(token){
  this.jwtToken=localStorage.getItem("token");
  this.parseJWT();
  }
  if(user){
    this.user=JSON.parse(atob(user));
 
  }
}

logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
 
}

getAgent(etat:boolean,numPage:number){
  let suffix;
  if(etat) suffix='/appUsers/search/agentsActive?page='+numPage+'&size='+this.nbElementParPage+'&sort=id,desc';
  else suffix='/appUsers/search/agentsNonActive?page='+numPage+'&size='+this.nbElementParPage+'&sort=id,desc';
  return this.http.get<Object>(this.host+suffix);
}
getTechnicien(etat:boolean,numPage:number){
  let suffix;
  if(etat) suffix='/appUsers/search/techniciensActive?page='+numPage+'&size='+this.nbElementParPage+'&sort=id,desc';
  else suffix='/appUsers/search/techniciensNonActive?page='+numPage+'&size='+this.nbElementParPage+'&sort=id,desc';
  return this.http.get<Object>(this.host+suffix);
}

presisteUser(idUser,actived){

  let ladate=new Date();
  return this.http.patch(`${this.host2}/${idUser}`,{actived:actived});
}

verifiePassword(password){

  return this.http.get<boolean>(this.host+'/verifieePassword/'+this.user.email+'/'+password);
}

changePassword(password){

  return this.http.get<void>(this.host+'/changePassword/'+this.user.email+'/'+password);
}


}