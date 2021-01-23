import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators , FormArray } from '@angular/forms'
@Component({
  selector: 'app-addguestform',
  templateUrl: './addguestform.component.html',
  styleUrls: ['./addguestform.component.css']
})
export class AddguestformComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }


  newtenant = this.fb.group({
    HeadDetails: this.fb.group({
      headName: ["" , Validators.required],
      headGender: [""],
      headContactno: [""],
      checkinDate: ["select date",Validators.required],
      checkoutDate: ["select date",Validators.required],
      address:[''],
      roomNo : ['',Validators.required]
    }),
    SpouseDetails: this.fb.group({
      spouseName: [""],
      spouseGender: [""],
      spouseContactno: [""],
    }),
    ChildrenDetails: this.fb.array([
      
    ]),
  });
  get ChildrenDetails() {
    return this.newtenant.get('ChildrenDetails') as FormArray;
  }

  addchild(){
    this.ChildrenDetails.push(
      this.fb.group({
        childName: [""],
        childGender: [""],
        childAge: [""],
      }),
    )
  }

  removechild(index){
    this.ChildrenDetails.removeAt(index)
  }

  submit(data){
    console.log(data);
    
  }

}
