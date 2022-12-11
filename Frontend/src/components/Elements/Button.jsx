const Button = ({ type, block, children, onClick }) => {
  const classes = [
    'bg-white rounded-md select-none px-3 py-1 focus:outline-none',
  ]

  // eslint-disable-next-line
  switch (type) {
    case 'solid':
      classes.push(
        `transition ease-in-out text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600`
      )
      break
    case 'outline':
      classes.push(
        'transition ease-in-out border text-gray-600 border-gray-200 hover:text-gray-800 hover:border-gray-400'
      )
      break
  }

  if (block) classes.push('w-full')

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
