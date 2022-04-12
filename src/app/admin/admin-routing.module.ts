import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
// import { EmployeesListComponent } from './components/employees-list/employees-list.component';
// import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
// import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
// import { RegistrationStatusComponent } from './components/registration-status/registration-status.component';

const routes: Routes = [
 {path:'', component:AdminDashboardComponent,
 children:[
  {path:'',component:DefaultPageComponent},
//   {path:'addAdmin',component:RegisterAdminComponent},
//   {path:'addEmployee',component:RegisterEmployeeComponent},
//   {path:'registerStatus',component:RegistrationStatusComponent},
//   {path:'viewEmployee',component:EmployeesListComponent},
 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
