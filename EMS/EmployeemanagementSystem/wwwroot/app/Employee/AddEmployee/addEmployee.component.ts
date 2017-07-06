import { Component, Inject, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Departments } from '../../department.model';
import { Employee } from '../../employee.model';
import { EmployeeModel } from '../../employeeModel.model';
import { Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './addEmployee.html',
})
export class AddEmployeeComponent implements OnInit {
    employees: Employee[] = new Array<Employee>();
    emptemp: Employee[] = new Array<Employee>();
    departments: Departments[] = new Array<Departments>();
    departmentTemp: Departments[] = new Array<Departments>();
    employeeObj: Employee;
    departmentobj: Departments;
    emp: EmployeeModel;

    constructor(public http: Http,public router:Router) {
        this.employeeObj = new Employee();
        this.departmentobj = new Departments();
        this.emp = new EmployeeModel;

    }

    ngOnInit() {
        this.http.get("api/department").subscribe((x) => {
            this.departments = x.json();
            this.departmentTemp = this.departments;
        });
        this.http.get("api/employee").subscribe((x) => {
            this.employees = x.json();
        });
    }

    addEmployee()
    {
        this.emp.departmentId = this.departmentobj.id;
        this.emp.employeeName = this.employeeObj.employeeName;
        this.http.post('api/employee', this.emp).subscribe((x) => {
            if (x.ok) {
                this.router.navigateByUrl('/employee');
            }
        });
        }
}