import Button from '../Elements/Button'

const Subscribe = () => {
  return (
    <div className="bg-white shadow-sm p-3 rounded-md space-y-3">
      <p className="text-gray-600 leading-5">
        Receive the latest
        <br />
        related ads by email.
      </p>
      <Button block type="solid">
        Subscribe
      </Button>
    </div>
  )
}

export default Subscribe
