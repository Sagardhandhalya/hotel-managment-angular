import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sidebarOn =  true
  
  @Output() sidebarToggleEvent  = new EventEmitter<boolean> ();

  ngOnInit() {
  }

  toggleSidebar(){
    this.sidebarOn = !this.sidebarOn;
    this.sidebarToggleEvent.emit(this.sidebarOn)
  }
  
 
}
