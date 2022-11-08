import Progress from '../Elements/Progress'
import Button from '../Elements/Button'

export default function Profile() {
  return (
    <section className="bg-white shadow-sm p-3 rounded-md space-y-3 text-center">
      <Progress value={89} />
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Hasan Said SERTKAYA</h3>
        <p className="text-gray-600">Full-Stack Developer</p>
        <Button block type="solid">
          Profil Güncelle
        </Button>
      </div>
    </section>
  )
}
