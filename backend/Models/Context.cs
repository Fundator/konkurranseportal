using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TodoApi.Models;

namespace Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<Kamp> Kamper { get; set; }
        public DbSet<Gren> Gren { get; set; }
        public DbSet<Konkurranse> Konkurranse { get; set; }
        public DbSet<Lag> Lag { get; set; }
    }
}
