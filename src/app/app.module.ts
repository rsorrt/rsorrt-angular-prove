import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

//need if form material/datepicker
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import MaterialModule from './modules/material.module';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { InfoComponent } from './component/info/info.component';

import { SharingDataComponent } from './component/sharing-data/sharing-data.component';
import { InputComponent }       from './component/sharing-data/input/input.component';

@NgModule({

  declarations: [
    AppComponent,
    //---------------------------
    FormComponent,
    InfoComponent,

    SharingDataComponent,
    InputComponent

    //---------------------------
  ],




  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule

  ],
    
  providers: [],

  bootstrap: [AppComponent],
})

export class AppModule {}
