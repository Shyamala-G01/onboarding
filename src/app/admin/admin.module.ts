import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';

import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { RegistrationStatusComponent } from './components/registration-status/registration-status.component';
// import { EmployeesListComponent } from './components/employees-list/employees-list.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
     DefaultPageComponent,
     RegisterAdminComponent,
     RegisterEmployeeComponent,
     RegistrationStatusComponent,
    //  EmployeesListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
