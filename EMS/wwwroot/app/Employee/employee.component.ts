import { Component, Inject, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Departments } from '../department.model';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './employee.html',
})
export class EmployeeComponent implements OnInit {
    isShown: boolean = true;
    employees: Employee[] = new Array<Employee>();
    emptemp: Employee[] = new Array<Employee>();
    departments: Departments[] = new Array<Departments>();
    departmentTemp: Departments[] = new Array<Departments>();
    employeeObj: Employee;
    departmentobj: Departments;

    constructor(public http: Http, private router: Router) {
        this.employeeObj = new Employee();
        this.departmentobj = new Departments();

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

    deleteEmployee(id: number) {
        this.http.delete('api/employee/' + id).subscribe((x) => {
            //this.router.navigate(['/employee']);
            if (x.ok) {
                this.http.get("api/employee").subscribe((x) => {
                    this.employeeObj = x.json();
                    this.employees.splice(this.employees.indexOf(this.employeeObj), 1);
                });
                    }
        });
    }

    updateDepartment(employeeId: number) {
        this.router.navigate(['employee', 'edit', employeeId]);
    }
}