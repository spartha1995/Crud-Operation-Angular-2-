import { Http } from "@angular/http";
import { Component, Inject } from '@angular/core';

export class DepartmentServices {

    constructor(public http: Http) {
    }

    addDepartment()
    { }

    updateDepartment()
    { }

    deleteDepartment(id:number)
    {
        this.http.delete("api/department/" + id);
    }

    getAllDepartment()
    { }
}