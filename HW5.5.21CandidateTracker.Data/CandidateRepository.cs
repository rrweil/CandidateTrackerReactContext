using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HW5._5._21CandidateTracker.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            var ctx = new CandidateDbContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }

        public List<Candidate> GetCandidates(Status status)
        {
            var ctx = new CandidateDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == status).ToList();
        }

    }
}
