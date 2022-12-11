namespace api.Models
{
    public class UserJob
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int JobId { get; set; }
        public Job Job { get; set; }
        public bool IsApplied { get; set; }
        public bool IsSaved { get; set; }
        public string Status { get; set; }
    }
}
