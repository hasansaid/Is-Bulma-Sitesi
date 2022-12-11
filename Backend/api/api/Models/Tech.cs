using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Tech
    {
        [Key]
        public int Id { get; set; }
        public int JobId { get; set; }  
        public Job Job { get; set; } 
        public string Name { get; set; }

    }
}
