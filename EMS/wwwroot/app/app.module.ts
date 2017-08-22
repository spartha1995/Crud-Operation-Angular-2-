import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.cpmponent';
import { Department } from './Department/department.component';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routing';
import { EmployeeComponent } from './Employee/employee.component';
import { AddEmployeeComponent } from './Employee/AddEmployee/addEmployee.component';
import {UpdateEmployeeComponent } from './Employee/UpdateEmployee/updateEmployee.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        Department,
        EmployeeComponent,
        AddEmployeeComponent,
        UpdateEmployeeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }