import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from '../material/material.module';
import { EducationalQualificationComponent } from './components/educational-qualification/educational-qualification.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';
import { OtherDetailsComponent } from './components/other-details/other-details.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    EducationalQualificationComponent,
    EmploymentDetailsComponent,
    OtherDetailsComponent,
    DeclarationComponent,
    PersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
