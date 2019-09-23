import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:User;
  public roles;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.user=this.authService.user;
    this.roles=this.authService.roles;
  }

}
