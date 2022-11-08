import styles from './Job.module.css'
import Button from '../../Elements/Button'
import Badge from '../../Elements/Badge'
import allJobs from '../../../constants/jobs.json'
import { useHistory } from 'react-router-dom'

export default function Job({
  userActive,
  changeAppliedJob,
  id,
  name,
  location,
  contract,
  remote,
  immediate,
}) {
  const job_title_classes = [styles.title]
  if (immediate) job_title_classes.push(styles.immediate)
  let history = useHistory()

  return (
    <li className={styles.job}>
      <div className={styles.content}>
        <h2 className={job_title_classes.join(' ')}>
          {name}
          {immediate && <Badge color="red">Acil</Badge>}
        </h2>
        <div className={styles.location}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>{location}</p>
        </div>
        <div className={styles.contract}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p>
            {contract}{' '}
            {remote && <span className={styles.remote}>Uzaktan</span>}
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          block
          type="solid"
          onClick={() => {
            document.getElementById('applyModalID').style.display = 'flex'
            changeAppliedJob(allJobs.filter(job => job.id == id)[0])
          }}
        >
          Başvur
        </Button>
        <Button
          block
          type="outline"
          onClick={() => {
            if (!userActive) {
              history.push('/login')
              return
            }
            history.push('/saved')
          }}
        >
          Kaydet
        </Button>
      </div>
    </li>
  )
}
