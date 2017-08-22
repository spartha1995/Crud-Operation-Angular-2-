using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeemanagementSystem.Models
{
    public class Department
    {

        [Key]
        public int Id { get; set; }

        public string DepatmentName { get; set; }

        public virtual ICollection<Employee> Employee { get; set; }
    }
}
