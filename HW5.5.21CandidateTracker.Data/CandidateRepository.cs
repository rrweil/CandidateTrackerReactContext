using Microsoft.EntityFrameworkCore;
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

        public Candidate GetCandidate(int id)
        {
            var ctx = new CandidateDbContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateCandidate(Candidate candidate)
        {
            var ctx = new CandidateDbContext(_connectionString);
            ctx.Candidates.Attach(candidate);
            ctx.Entry(candidate).State = EntityState.Modified;
            ctx.SaveChanges();
        }

        public List<int> getCounts()
        {
            var ctx = new CandidateDbContext(_connectionString);
            var counts = new List<int>();
            counts.Add(ctx.Candidates.Where(c => c.Status == Status.Pending).Count());
            counts.Add(ctx.Candidates.Where(c => c.Status == Status.Confirmed).Count());
            counts.Add(ctx.Candidates.Where(c => c.Status == Status.Refused).Count());
            return counts;
        }

    }
}
