using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Note> Notes { get; set; }
        public DbSet<User> Users { get; set; }
  
    }
}

