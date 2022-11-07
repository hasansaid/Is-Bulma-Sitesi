import Button from '../Elements/Button'

const Subscribe = () => {
  return (
    <div className="bg-white shadow-sm p-3 rounded-md space-y-3">
      <p className="text-gray-600 leading-5">
        En son ilgili reklamları
        <br />
        email ile alın.
      </p>
      <Button block type="solid">
        Abone Ol
      </Button>
    </div>
  )
}

export default Subscribe
