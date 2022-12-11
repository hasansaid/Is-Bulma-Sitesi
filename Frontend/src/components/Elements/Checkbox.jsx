const Checkbox = ({ label, checked, change }) => {
  return (
    <div className="flex items-center select-none space-x-2" onClick={change}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={change}
          className="appearance-none bg-white w-3 h-3 border border-gray-400 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200"
        />
        {checked && (
          <svg
            className="w-3 h-3 absolute inset-1/2 text-white"
            style={{ transform: 'translate(-50%, -50%)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <label className="flex-1" onClick={change} children={label} />
    </div>
  )
}

export default Checkbox
