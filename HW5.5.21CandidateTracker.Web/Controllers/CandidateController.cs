using HW5._5._21CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW5._5._21CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;

        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addCandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.Status = Status.Pending;
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("getCandidates")]
        public List<Candidate> GetCandidates(Status status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidates(status);
        }

        [HttpGet]
        [Route("getCandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(id);
        }

        [HttpPost]
        [Route("UpdateCandidate")]
        public void UpdateCandidateStatus(Candidate candidate)
        {

            var repo = new CandidateRepository(_connectionString);
            repo.UpdateCandidate(candidate);
         }

        [HttpGet]
        [Route("GetCounts")]
        public List<int> GetCounts()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.getCounts();
        }
    }
}
