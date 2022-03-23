import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';

const materialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatStepperModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule
]

@NgModule({
 
  imports: [
  materialComponents
  ],
  exports :[
  materialComponents
  ]
})
export class AngularmaterialModule { }
