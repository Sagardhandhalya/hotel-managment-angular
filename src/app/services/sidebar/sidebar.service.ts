import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  constructor() { }
  sidebarstate = {

    disp:"fixed",
    ml:"200px"

  }

  toggle(){
    if(this.sidebarstate.disp === 'fixed')
    {
      this.sidebarstate ={
        disp:"none",
    ml:"0px"
      }
    }
    else{
      this.sidebarstate={
        disp:"fixed",
        ml:"200px"
      }
    }
  }

  getstate(){
    return this.sidebarstate;
  }
}
