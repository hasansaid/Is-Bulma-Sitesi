import jobs from '../../constants/jobs'

export default function Requests() {
  return (
    <section className="bg-white shadow-sm p-3 rounded-md space-y-3">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Pozisyonlar </h3>
        <hr className="divider" />
        <ul className="space-y-2">
          {jobs
            .filter(job => job.applied)
            .map(job => (
              <li key={job.id} className="text-sm">
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  {job.name}
                </a>
              </li>
            ))}
        </ul>
        <a
          href="/"
          className="mt-2 inline-block text-blue-500 hover:text-blue-600"
        >
          Tüm Pozisyonları Göster
        </a>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Benim Pozisyonum</h3>
        <hr className="divider" />
        <ul className="space-y-2">
          {jobs
            .filter(job => job.saved)
            .map(job => (
              <li key={job.id} className="text-sm">
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  {job.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
