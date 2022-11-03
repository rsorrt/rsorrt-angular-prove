import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import MyLogger from '../../commons/logger';
import MyUtilValidator from '../../commons/util-validator';


//import MyLogger from '../commons/logger';
//import MyUtilValidator from "../commons/util-validator";

//rsorrt
//ancora non funziona in stackblitz (vedere in tsconfig.json)
//import UtilValidator from "@appCommons/util-validator";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

 
  isFormSubmitted = false;
  startDate = new Date(2000, 0, 2);
  myForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    
    MyLogger.debugGreen("MyLogger here");
    MyLogger.debugOrange("MyLogger here");
    MyLogger.debug("MyLogger here");


    this.reactiveForm()
    
    //this.formGroup = new FormGroup({
      //firstname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    //});

} 

reactiveForm() {



  this.myForm = this.formBuilder.group({
   
    firstname:   ['', [Validators.required, MyUtilValidator.cannotContainSpace]],
    gender:      ['Male'],
    dateOfBirth: ['', [Validators.required]],
    
  })

}

/*
date(e) {
  var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  this.myForm.get('dob').setValue(convertDate, {
    onlyself: true,
  });
}
*/



    onSubmit(){


    

      console.log("submitted...");

      let firstname = this.myForm.controls.firstname.value.trim();
      let gender = this.myForm.controls.gender.value;
      let dateOfBirth = this.myForm.controls.dateOfBirth.value;

      console.log("firstname: [" + firstname+  "]");
      console.log("gender: [" + gender+  "]");
      console.log("dateOfBirth: [" + dateOfBirth+  "]");

       this.isFormSubmitted = true;
      

      
      
    }


  
 
}
