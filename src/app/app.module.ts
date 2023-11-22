import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { Routes , RouterModule } from '@angular/router';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';





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
     

     locahosthost:4200/employeedetails/1
                                      ---

*/

const routes : Routes = [ 
                           { path : "main" , component : MainComponent } , 
                           { path : "employee" , component : EmployeeComponent},
                           { path : "employeedetails" , component : EmployeeDetailsComponent},
                           { path : "employeedetails/:ID" , component : EmployeeDetailsComponent},
                           { path : "login" , component : LoginComponent } , 
                           { path : "not-found" , component : NotFoundComponent},

                           
                           { path : "" ,  redirectTo:'login'  ,pathMatch:'full' } ,    //localhost:4200/login
                           { path : "**" , redirectTo:'not-found' }
                        ];



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
