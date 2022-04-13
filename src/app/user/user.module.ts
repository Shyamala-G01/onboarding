import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from '../material/material.module';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { EducationalQualificationComponent } from './components/educational-qualification/educational-qualification.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';
import { OtherDetailsComponent } from './components/other-details/other-details.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { HeaderComponent } from '../layout-components/header/header.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PersonalInformationComponent,
    EducationalQualificationComponent,
    EmploymentDetailsComponent,
    OtherDetailsComponent,
    DeclarationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
