using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EmployeemanagementSystem.Repository.DepartmentReposotory;
using EmployeemanagementSystem.Models;

namespace EmployeemanagementSystem.Controllers
{
    [Route(baseUrl)]
    public class DepartmentController : Controller
    {
        #region Private Members

        private readonly IDepartmentReposotory _departmentRepository;
        public const string baseUrl = "api/department";

        #endregion

        #region Constructor

        public DepartmentController(IDepartmentReposotory departmentRepository)
        {
            _departmentRepository = departmentRepository;
        }

        #endregion

        #region public API(s)

        #region Get Department By Id

        /// <summary>
        /// Method to get Department by id
        /// </summary>
        /// <param name="id">Id to get Department</param>
        /// <returns>Department object</returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDepartmentById(int id)
        {
            return Ok(await _departmentRepository.GetDepartmentAsnync(id));
        }

        #endregion

        #region Get All Department

        /// <summary>
        /// Method to Get all Department
        /// </summary>
        /// <returns>Department object</returns>
        [HttpGet]
        public async Task<IActionResult> GetAllDepartment()
        {
            var department = await _departmentRepository.GetAllDepartmentAsync();
            return Ok(department);
        }

        #endregion

        #region Add Department


        /// <summary>
        /// Method to add Department
        /// </summary>
        /// <param name="department">Department object</param>
        /// <returns>Department object</returns>
        [HttpPost]
        public async Task<IActionResult> AddDepartment([FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _departmentRepository.AddDepartmentAsync(department);
            return Ok(department);
        }

        #endregion

        #region Update Department

        /// <summary>
        /// Method to update Department
        /// </summary>
        /// <param name="id">Id to update Department</param>
        /// <param name="department">Department object</param>
        /// <returns>department object</returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDepartment(int id, [FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var departmentToUpdate = await _departmentRepository.GetDepartmentAsnync(id);
            if (departmentToUpdate == null)
            {
                return NotFound();
            }
            departmentToUpdate.DepatmentName = department.DepatmentName;
            await _departmentRepository.UpdateDepartmentAsync(departmentToUpdate);
            return Ok();
        }

        #endregion

        #region Delete Department

        /// <summary>
        /// Method to delete Delete Department
        /// </summary>
        /// <param name="id"></param>
        /// <returns>204 if success</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var departmentToDelete = await _departmentRepository.GetDepartmentAsnync(id);
            if (departmentToDelete == null)
            {
                return NotFound();
            }
            await _departmentRepository.DeleteDepartmentAsync(departmentToDelete);
            return NoContent();
        }

        #endregion

        #endregion
    }
}