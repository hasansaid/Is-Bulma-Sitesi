using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly apiDbContext _context;

        public JobController()
        {
            _context = new apiDbContext();
        }




        // GET: api/Job
        [AllowAnonymous] // tüm işler için kontrole gerek yok
        [HttpGet]
        public IEnumerable<Job> GetJobs()
        {
            return _context.Jobs.Select (j => new Job {Id=j.Id,Name=j.Name, Contract=j.Contract, Location=j.Location,
                Remote=j.Remote, Immediate=j.Immediate, Level=j.Level,SendDate=j.SendDate,
                Techs = _context.Techs.Where(t => t.JobId == j.Id).ToList()});
        }

        //--
        [HttpGet("basvur")]
        public ActionResult Basvur(int id)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;

            UserJob oldUserJob = _context.UserJobs.Where(uj => uj.UserId.ToString() == userId 
                                                          && uj.JobId == id).FirstOrDefault();
            if(oldUserJob != null)
            {
                oldUserJob.IsApplied = true;
                _context.SaveChanges();
                return Ok(200);
            }
            UserJob userJob = new UserJob() { UserId=Int32.Parse(userId), JobId=id, 
                                              IsApplied=true,IsSaved=false, Status="Bekleniyor" };
            _context.UserJobs.Add(userJob);
            _context.SaveChanges();


            return Ok(200);
        }
        [HttpGet("basvurulanlar")]
        public IEnumerable<Job> Basvurulanlar()
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;

            List<Job> userJobs = new List<Job>(); 
            userJobs = _context.UserJobs.Where(uj=>uj.UserId.ToString()==userId && 
            uj.IsApplied == true).Select(uj=>uj.Job).ToList();

            return userJobs;


            //return _context.Jobs.Where(j => userJobs.Where(uj => uj.JobId == j.Id).FirstOrDefault()!=null).ToList();

            //List<Job> myJobs = new List<Job>();
            //foreach (Job job in _context.Jobs.ToList())
            //{
            //    foreach (UserJob userJob in userJobs)
            //    {
            //        if (job.Id==userJob.JobId)
            //        {
            //            myJobs.Add(job);
            //        }
            //    }
            //}

            
        }


        //--
        //--
        [HttpGet("kaydet")]
        public ActionResult Kaydet(int id)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;


            UserJob oldUserJob = _context.UserJobs.Where(uj => uj.UserId.ToString() == userId &&
            uj.JobId == id).FirstOrDefault();
            if (oldUserJob != null)
            {
                oldUserJob.IsSaved = true;
                _context.SaveChanges();
                return Ok(200);
            }

            UserJob userJob = new UserJob() { UserId = Int32.Parse(userId), JobId = id, 
            IsApplied = false, IsSaved = true, Status = "Bekleniyor" };
            _context.UserJobs.Add(userJob);
            _context.SaveChanges();


            return Ok(200);
        }
        [HttpGet("kaydedilenler")]
        public IEnumerable<Job> Kaydedilenler()
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;

            List<Job> userJobs = new List<Job>();
            userJobs = _context.UserJobs.Where(uj => uj.UserId.ToString() == userId && 
            uj.IsSaved==true).Select(uj => uj.Job).ToList();

            return userJobs;
          

        }


        [HttpGet("sil")]
        public IActionResult Sil(int id)
        {

            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;

            var userJob =  _context.UserJobs.Where(uj=>uj.UserId.ToString()==userId && uj.JobId==id).FirstOrDefault();
            if (userJob == null)
            {
                return BadRequest(new { message = "hatalı silinmedi" });
            }

            _context.UserJobs.Remove(userJob);
            _context.SaveChanges();

            return Ok(200);
        }

        //// GET: api/Job/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Job>> GetJob(int id)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value; // şuan erişen kullanıcının id'sini getiriyor.

            var job = await _context.Jobs.FindAsync(id);

            if (job == null)
            {
                return NotFound();
            }

            return job;
        }

        // PUT: api/Job/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJob(int id, Job job)
        {
            if (id != job.Id)
            {
                return BadRequest();
            }

            _context.Entry(job).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Job
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Job>> PostJob(Job job)
        {
            _context.Jobs.Add(job);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJob", new { id = job.Id }, job);
        }

        // DELETE: api/Job/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJob(int id)
        {
            var job = await _context.Jobs.FindAsync(id);
            if (job == null)
            {
                return NotFound();
            }

            _context.Jobs.Remove(job);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JobExists(int id)
        {
            return _context.Jobs.Any(e => e.Id == id);
        }
    }
}
