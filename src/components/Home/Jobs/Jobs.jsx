import styles from './Jobs.module.css'
import Job from './Job'

export default function Jobs({ userActive, changeAppliedJob, jobs }) {
  return (
    <ul className={styles.jobs}>
      {jobs.map(job => (
        <Job
          userActive={userActive}
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
