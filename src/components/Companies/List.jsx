import companies from '../../constants/companies'

export default function List() {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {companies.map(company => (
        <li
          key={company.id}
          className="bg-white shadow-sm rounded-md overflow-hidden flex flex-col"
        >
          <div className="relative h-40">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={`/images/${company.bgImg}`}
              alt={company.name}
            />
            <div className="absolute left-3 bottom-3 bg-white rounded-md shadow-sm p-1 w-12 h-12">
              <img
                className="w-full h-full object-cover"
                src={`/images/${company.logoImg}`}
                alt={`${company.name} Logo`}
              />
            </div>
            <div
              className="absolute right-3 bottom-3 px-2 py-1 overflow-hidden rounded-md text-white"
              style={{ background: 'rgba(0, 0, 0, 0.6)' }}
            >
              <h3>{company.name}</h3>
            </div>
          </div>
          <p className="p-5 text-sm text-center text-gray-600 flex-1">
            {company.description}
          </p>
          <div className="border-t flex items-center justify-between p-2">
            <div className="flex items-center space-x-1 text-gray-600">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm">{company.city}</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <p className="text-sm">
                {`${company.size[0]} - ${company.size[1]} people`}
              </p>
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
