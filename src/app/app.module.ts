import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { Routes , RouterModule } from '@angular/router';





// https://localhost:4200   

// https://localhost:4200/main           -->  path : https://localhost:4200/main ,     component  : Maincomponent
// https://localhost:4200/Employee       -->  path : https://localhost:4200/employee , component : Employee comp
// https://localhost:4200/EmployeeDetails --> path : https://localhost:4200/employeedetails , component : empdetailsccomp


// our target is configuration

//  const routers : Routes  = {
//     path : "main" ,     component  : MainComponent,
//    path : "employee" , component"  : EmployeeComponent,
//    "path" : "employeedetails" , "component" : EmployeeDetailsComponent
//  }

/*
     1. Routes is nothing but array of objects 
     

*/

const routes : Routes = [ 
                           { path : "main" , component : MainComponent } , 
                           { path : "employee" , component : EmployeeComponent},
                           { path : "employeedetails" , component : EmployeeDetailsComponent}
                        ];



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
