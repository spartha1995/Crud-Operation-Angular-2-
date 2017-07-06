using EmployeemanagementSystem.Models;
using EmployeemanagementSystem.Models.Application_Class;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeemanagementSystem.Repository.EmployeeReposotory
{
    public interface IEmployeeReposotory
    {
        /// <summary>
        /// Method to add Employee
        /// </summary>
        /// <param name="employee">Employee object</param>
        /// <returns></returns>
        Task AddEmployeeAsync(Employee employee);

        /// <summary>
        /// Method to update Employee
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        Task UpdateEmployeeAsync(Employee employee);

        /// <summary>
        /// Method to Delete Employee
        /// </summary>
        /// <param name="employee">Employee object</param>
        /// <returns></returns>
        Task DeleteEmployeeAsync(Employee employee);

        /// <summary>
        /// Method to get Employee by id
        /// </summary>
        /// <param name="id">Id to Get Employee</param>
        /// <returns>Employee object</returns>
        Task<Employee> GetEmployeeAsync(int id);

        /// <summary>
        /// Method ro Get all Employee 
        /// </summary>
        /// <returns>List of Employee</returns>
        Task<List<EmployeeAC>> GetAllAsync();
    }
}
