import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sideser : SidebarService ) { }

  ngOnInit() {
  }

  switch(){
    console.log("pressed...");
    
    this.sideser.toggle()

    console.log(this.sideser.getstate());
    
  }
 
}