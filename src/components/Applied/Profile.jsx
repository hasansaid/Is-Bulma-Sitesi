import Progress from '../Elements/Progress'
import Button from '../Elements/Button'

export default function Profile() {
  return (
    <section className="bg-white shadow-sm p-3 rounded-md space-y-3 text-center">
      <Progress value={75} />
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Hurry up!</h3>
        <p className="text-gray-600">
          Update your profile to speed up corporate communication with you.
        </p>
        <Button block type="solid">
          Update Profile
        </Button>
      </div>
    </section>
  )
}
