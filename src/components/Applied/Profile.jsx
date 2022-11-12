import Progress from '../Elements/Progress'
import Button from '../Elements/Button'
import db from '@yusuf-yeniceri/easy-storage'

export default function Profile() {
  return (
    <section className="bg-white shadow-sm p-3 rounded-md space-y-3 text-center">
      <Progress value={89} />
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{db.ref('fullname').get()}</h3>
        <p className="text-gray-600">{db.ref('position').get()}</p>
        <Button block type="solid">
          Profil Güncelle
        </Button>
      </div>
    </section>
  )
}
