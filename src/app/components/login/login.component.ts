import { Component, OnInit } from '@angular/core';
import {Validators , FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  admin = this.fb.group({
    email : ['' , Validators.required],
    password : ['',Validators.required],
  })

  login(data){
    console.log(data);
      
    }

}
