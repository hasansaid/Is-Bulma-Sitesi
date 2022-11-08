import Badge from '../../components/Elements/Badge'
import jobs from '../../constants/jobs'

const Jobs = () => {
  const statusInfo = type => {
    switch (type) {
      case 'confirmed':
        return { text: 'Onaylandı', color: 'green' }
      case 'rejected':
        return { text: 'Reddedildi', color: 'red' }
      case 'seen':
        return { text: 'Görüldü', color: 'blue' }
      default:
        return { text: 'Görülmedi', color: 'gray' }
    }
  }

  return (
    <ul className="bg-white shadow-sm rounded-md overflow-hidden">
      {jobs
        .filter(job => job.applied)
        .map((job, index) => {
          const status = statusInfo(job.status)
          const classes = ['p-5', 'md:flex']

          if (jobs.length !== index + 1)
            classes.push('border-b', 'border-gray-100')

          return (
            <li key={job.id} className={classes.join(' ')}>
              <div className="flex-1 pr-5">
                <h2 className="text-xl font-semibold">
                  {job.name}
                  <Badge color="light" children={job.level} />
                </h2>
                <div className="flex items-center text-gray-600 space-x-1">
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
                  <p>{job.location}</p>
                </div>
                <div className="flex items-center text-gray-600 space-x-1">
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
                    {job.contract}{' '}
                    {job.remote && (
                      <span className="text-yellow-600">Uzaktan</span>
                    )}
                  </p>
                </div>
                <div className="flex items-center text-gray-600 space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>{job.sendDate}</p>
                </div>
                <div className="flex items-center text-gray-600 space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <a href="/" target="_blank">
                    Cv Görüntüle
                  </a>
                </div>
              </div>
              <div className="job__actions">
                <Badge color={status.color} children={status.text} />
              </div>
            </li>
          )
        })}
    </ul>
  )
}

export default Jobs
