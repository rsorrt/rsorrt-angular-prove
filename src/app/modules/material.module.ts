import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from '@angular/material/radio';


const modules = [
  MatButtonModule,
  MatCardModule,
  
  MatDatepickerModule,
  MatNativeDateModule,

  MatDividerModule,
  MatIconModule,
  MatNativeDateModule, 
  MatRadioModule,
  MatToolbarModule,

  MatInputModule,
  MatFormFieldModule
]


@NgModule({
  imports: [
     modules
  ],

  exports: [
    modules
  ]

})

export default class MaterialModule { }