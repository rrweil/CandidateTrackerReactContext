using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace HW5._5._21CandidateTracker.Data
{
    public class CandidatesContextFactory : IDesignTimeDbContextFactory<CandidateDbContext>
    {
        public CandidateDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}HW5.5.21CandidateTracker.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateDbContext(config.GetConnectionString("ConStr"));
        }
    }
}
