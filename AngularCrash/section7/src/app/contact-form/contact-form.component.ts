import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms/forms";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

contactMethods=[
  {id:1,name:"Mail"},
  {id:2,name:"Email"},
  {id:3,name:"Phone"},
]
  log(firstName){

  }
  submit(f){
    f.value
    console.log(f.value)
  }

}
