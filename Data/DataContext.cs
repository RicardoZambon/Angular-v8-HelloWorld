using AngularHelloWorld.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularHelloWorld.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Value> Values { get; set; }
    }
}