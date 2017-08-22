using EmployeemanagementSystem.Data;
using EmployeemanagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeemanagementSystem.Repository.DepartmentReposotory
{
    public class DepartmentReposotory : IDepartmentReposotory
    {
        #region Private Member(s)

        private readonly ApplicationDbContext _dbContext;

        #endregion

        #region Constructor

        public DepartmentReposotory(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        #endregion

        #region Public method(s)

        public async Task AddDepartmentAsync(Department department)
        {
            _dbContext.Department.Add(department);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateDepartmentAsync(Department department)
        {
            _dbContext.Department.Update(department);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteDepartmentAsync(Department department)
        {
            _dbContext.Department.Remove(department);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<Department> GetDepartmentAsnync(int id)
        {
            return await _dbContext.Department.FindAsync(id);
        }

        public async Task<List<Department>> GetAllDepartmentAsync()
        {
            return await (_dbContext.Department.AsQueryable()).ToListAsync();
        }

        #endregion
    }
}
