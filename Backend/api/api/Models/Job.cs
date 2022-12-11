namespace api.Models
{
    public class Job
    {
        //     "id": 1,
        //"name": "Frontend Engineer",
        //"location": "İstanbul",
        //"contract": "Tam Zamanlı",
        //"remote": true,
        //"immediate": true,
        //"saved": true,
        //"applied": true,
        //"level": "Junior",
        //"status": "rejected",
        //"sendDate": "20 May, 2021",
        //"techs": ["frontend", "react", "javascript"]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Contract { get; set; }
        public bool Remote { get; set; }
        public bool Immediate { get; set; }
        public string Level { get; set; }
        public string SendDate { get; set; }
        public ICollection<Tech> Techs { get; set; }

        public ICollection<UserJob> UserJobs { get; set; }
    }
}
