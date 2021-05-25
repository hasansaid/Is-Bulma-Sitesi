import './style.css';
import Job from './Job';
import jobs from '../../../constants/jobs';

export default function Jobs() {
  return (
    <ul className="jobs-list">
      {jobs.map(job => (
        <Job
          key={job.id}
          name={job.name}
          location={job.location}
          contract={job.contract}
          remote={job.remote}
          immediate={job.immediate}
        />
      ))}
    </ul>
  );
}
