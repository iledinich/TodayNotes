using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TodayNotesAPI.Core.Models;

namespace TodayNotesAPI.Persistence
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server database
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
        }
        public DbSet<Note> Notes { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
