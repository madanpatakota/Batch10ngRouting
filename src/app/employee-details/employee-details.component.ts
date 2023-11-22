import { Component , OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee, EmployeeDetails } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // you have to take the activate router and subscribe the  params of that activate route then you will receive the parametes from list
  // you will recevie the what are the parameters from the url


  // you have to subscrobe the params of the activate route then you will receive the params 

  // you have to subscrobe the youtube videos then you will receive the  information(video) 



  constructor(public activateRoute : ActivatedRoute , public employeeSerivce : EmployeeService){}



    employeedetails : EmployeeDetails;
    ngOnInit(): void {

      this.activateRoute.params.subscribe((routeparams:any)=>{
                console.log("Routeparams " , routeparams);   // { id : _______}

                // 1. how to convert te string to the number
                // 2. filter always return the array of the values

                //Number("10");

             var filterEmployees : EmployeeDetails[] =   this.employeeSerivce.employeeDetails.filter((employee)=> { return employee.EmpID == +routeparams.ID})
                                //  =  [  ___________ ]
                                //  =       0

            this.employeedetails    =  filterEmployees[0];
            console.log(this.employeedetails);

      })
         
    }



}
