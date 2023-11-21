import { Component , OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeServcie : EmployeeService){

  }


  EmpList:Employee[] = [];

  ngOnInit(): void {
    this.EmpList = this.employeeServcie.employeesList;   // employee list : Employee[]
  }




}
