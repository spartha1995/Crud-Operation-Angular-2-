import { Component, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { Departments } from '../department.model';
import { Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './department.html',
})
export class Department {
    isShown: boolean = true;
    departments: Departments[] = new Array<Departments>();
    departmentTemp: Departments[] = new Array<Departments>();
    departmentobj: Departments;

    constructor(public http: Http,public router:Router) {
        this.departmentobj = new Departments();
        this.http.get("api/department").subscribe((x) => {
            this.departments = x.json();
            this.departmentTemp = this.departments;
        });
    }

    deleteDepartment(dept:Departments)
    {
        this.http.delete("api/department/" + dept.id).subscribe((x) => {
            this.departments.splice(this.departments.indexOf(dept), 1);
        });
    }

    addDept()
    {
        this.http.post("api/department", this.departmentobj).subscribe((x) => {
            if (x.ok)
            {
                this.departments.push(x.json());
                this.departmentobj = new Departments();
            }
        });
    }

    updateDepartment(dept: Departments) {
        this.isShown = false;
        this.departmentobj = dept;
    }
    updatedDepartment() {
        this.http.put("/api/department/" + this.departmentobj.id, this.departmentobj).subscribe((x) => {
            this.isShown = true;
            this.departmentobj = new Departments();
        });
    }
}