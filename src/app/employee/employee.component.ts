import { Component , OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

/*Router featuere */

// our target is to navigate to the emploeedetails
//Router
import { Router }  from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeServcie : EmployeeService , public router : Router){

  }


  EmpList:Employee[] = [];

  ngOnInit(): void {
    this.EmpList = this.employeeServcie.employeesList;   // employee list : Employee[]
  }

  evtNavigationWithoutParam(){
     // i want to navigate the router......
       this.router.navigate(['/employeedetails']);
  }


  //["Madan" , 0 , false , {}]
  // [ 1 ,2 , 3 , 4];

  evtNavigationWithParam(id:any){
       // i want to navigate the router......
       this.router.navigate(['/employeedetails' , id]);
  }





}
