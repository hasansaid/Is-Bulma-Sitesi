import styles from './Jobs.module.css'
import Job from './Job'

export default function Jobs({ jobs }) {
  return (
    <ul className={styles.jobs}>
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
  )
}
