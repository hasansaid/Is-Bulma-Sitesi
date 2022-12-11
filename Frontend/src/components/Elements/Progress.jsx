const Progress = ({ value }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden flex flex-col-reverse">
        <div className="w-full bg-blue-500" style={{ height: `${value}%` }} />
      </div>
      <p className="text-lg font-semibold text-blue-500">{value}%</p>
    </div>
  )
}

export default Progress
