import './style.css';
import Job from './Job';
import jobs from '../../../constants/jobs';

export default function Jobs() {
  return (
    <ul className="jobs-list">
      {jobs.map(({ id, name }) => (
        <Job key={id} name={name} />
      ))}
    </ul>
  );
}
