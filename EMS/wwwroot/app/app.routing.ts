import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Department } from './Department/department.component';
import { EmployeeComponent } from './Employee/employee.component';
import { AddEmployeeComponent } from './Employee/AddEmployee/addEmployee.component';
import { UpdateEmployeeComponent} from './Employee/UpdateEmployee/updateEmployee.component';

const appRoutes: Routes = [
    {
        path: '',
        //redirectTo: '/department',
        component: Department,
        //pathMatch: 'full'
    },
    {
        path: 'employee',
        component:EmployeeComponent
    },
    {
        path: 'employee/add',
        component: AddEmployeeComponent
    },

    {
        path: 'employee/edit/:id',
        component: UpdateEmployeeComponent
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);