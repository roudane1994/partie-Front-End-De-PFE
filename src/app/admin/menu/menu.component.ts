import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() changeMode=new EventEmitter<string>();

  constructor(private router:Router) { }

  ngOnInit() {
  }

  changeDeMode(mode:string){
    this.router.navigate(['/espaceAdmin/'+mode]);
    this.changeMode.emit(mode);
  
  }

}
