import { Component, Inject, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Departments } from '../../department.model';
import { Employee } from '../../employee.model';
import { EmployeeModel } from '../../employeeModel.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './updateEmployee.html',
})
export class UpdateEmployeeComponent {
    employees: Employee[] = new Array<Employee>();
    emptemp: Employee[] = new Array<Employee>();
    departments: Departments[] = new Array<Departments>();
    departmentTemp: Departments[] = new Array<Departments>();
    employeeObj: Employee;
    departmentobj: Departments;
    emp: EmployeeModel;

    constructor(public http: Http, public route: ActivatedRoute, private router: Router) {
        this.employeeObj = new Employee();
        this.departmentobj = new Departments();
        this.emp = new EmployeeModel;

    }
    ngOnInit() {
        var id = this.route.snapshot.params['id'];
        this.http.get("api/employee/" + id).subscribe((x) => {
            this.employeeObj = x.json();
        });
        this.http.get("api/department").subscribe((x) => {
            this.departments = x.json();
            this.departmentTemp = this.departments;
        });
    }

    updateEmployee() {
        this.emp.departmentId = this.departmentobj.id;
       var id = this.employeeObj.id;
        this.emp.employeeName = this.employeeObj.employeeName;
        this.http.put('api/employee/' + id, this.emp).subscribe((x) => {
            if (x.ok) {
                this.router.navigateByUrl('/employee');
            }
        });
    }
}