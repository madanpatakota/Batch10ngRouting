import { Employee, EmployeeDetails } from './employee';

export class EmployeeService {
  employeesList: Employee[] = [
    {
      ID: 1,
      Name: 'John',
      Role: 'Admin',
      Email: 'John@gmail.com',
    },
    {
      ID: 2,
      Name: 'Mohammad',
      Role: 'SalesRep',
      Email: 'Mohammad@gmail.com',
    },
    {
      ID: 3,
      Name: 'Rama',
      Role: 'EndUser',
      Email: 'Rama@gmail.com',
    },
  ];

  employeeDetails: EmployeeDetails[] = [
    {
      EmpID: 1,
      Location: 'Bangolore',
      isMarried: 'Yes',
      Age: '50',
      religion: 'Christian',
    },
    {
      EmpID: 2,
      Location: 'Delhi',
      isMarried: 'Yes',
      Age: '60',
      religion: 'Musilm',
    },
    {
      EmpID: 3,
      Location: 'Kadapa',
      isMarried: 'No',
      Age: '25',
      religion: 'Hindu',
    },
  ];
  
}
