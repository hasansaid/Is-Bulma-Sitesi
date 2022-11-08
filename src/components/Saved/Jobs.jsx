import jobs from '../../constants/jobs'
import Button from '../Elements/Button'

export default function Jobs() {
  return (
    <ul id="jobs" className="bg-white shadow-sm rounded-md overflow-hidden">
      {jobs
        .filter(job => job.saved)
        .map(job => (
          <li key={job.id} className="p-5 md:flex">
            <div className="flex-1 pr-5 md:w-10/12">
              <h2 className="text-xl font-semibold">{job.name}</h2>
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
            </div>
            <div className="flex mt-3 space-x-2 md:space-x-0 md:space-y-2 md:mt-0 md:flex-col md:w-2/12">
              <Button
                block
                type="solid"
                // onClick={() => {
                //   document.getElementById('applyModalID').style.display = 'none'
                //   window.location = '/applied'
                // }}
              >
                Başvur
              </Button>
              <Button block type="outline">
                {job.saved ? 'Kaydedildi' : 'Kaydet'}
              </Button>
            </div>
          </li>
        ))}
    </ul>
  )
}
