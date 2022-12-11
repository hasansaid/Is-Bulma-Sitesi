using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class apiDbContext : DbContext 
    {
        public apiDbContext() { }

        public DbSet<Job> Jobs { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserJob> UserJobs { get; set; }
        public DbSet<Tech> Techs { get; set; } 
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("DATA SOURCE=localhost\\SQLEXPRESS01;DATABASE=isapi2;UID=sa;PWD=1;trustServerCertificate=true;Integrated Security=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<BookCategory>().HasOne(bc => bc.Book)/.WithMany(b => b.BookCategories).HasForeignKey(bc => bc.BookId);
            modelBuilder.Entity<UserJob>().HasKey(uj => new { uj.UserId, uj.JobId });
            modelBuilder.Entity<UserJob>().HasOne(uj=>uj.User).WithMany(u=>u.UserJobs).HasForeignKey(uj=>uj.UserId);
            modelBuilder.Entity<UserJob>().HasOne(uj => uj.Job).WithMany(j => j.UserJobs).HasForeignKey(uj=>uj.JobId);
            modelBuilder.Entity<Tech>().HasOne(t => t.Job).WithMany(j => j.Techs).HasForeignKey(t => t.JobId);
        }
    }

}
