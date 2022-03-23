import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { PersonalFormComponent } from './components/stepper/personal-form/personal-form.component';
import { QualificationFormComponent } from './components/stepper/qualification-form/qualification-form.component';
import { EmploymentFormComponent } from './components/stepper/employment-form/employment-form.component';
import { OtherFormComponent } from './components/stepper/other-form/other-form.component';
import { DeclarationFormComponent } from './components/stepper/declaration-form/declaration-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StepperComponent,
    PersonalFormComponent,
    QualificationFormComponent,
    EmploymentFormComponent,
    OtherFormComponent,
    DeclarationFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
