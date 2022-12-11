using System.Diagnostics.CodeAnalysis;

namespace api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        [AllowNull]
        public string? Token { get; set; } //add-migration newName or (failed)add-migration name

        public ICollection<UserJob> UserJobs { get; set; }
    }
}
