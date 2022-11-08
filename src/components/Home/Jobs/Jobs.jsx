import styles from './Jobs.module.css'
import Job from './Job'

export default function Jobs({ changeAppliedJob, jobs }) {
  return (
    <ul className={styles.jobs}>
      {jobs.map(job => (
        <Job
          changeAppliedJob={changeAppliedJob}
          key={job.id}
          id={job.id}
          name={job.name}
          location={job.location}
          contract={job.contract}
          remote={job.remote}
          immediate={job.immediate}
        />
      ))}
    </ul>
  )
}
