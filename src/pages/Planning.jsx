import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Download, Trash2 } from 'lucide-react'
import { usePlanning } from '../hooks/usePlanning'
import { CRENEAUX_PLANNING } from '../utils/constants'
import projetsData from '../data/projets.json'

const Planning = () => {
  const { planning, removeFromPlanning, clearPlanning } = usePlanning()

  const getProjet = (id) => projetsData.find(p => p.id === id)

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Planning' }]} />

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-display font-bold">Mon planning</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => window.print()} leftIcon={<Download size={20} />}>
            Imprimer
          </Button>
          <Button variant="danger" onClick={clearPlanning} leftIcon={<Trash2 size={20} />}>
            Tout effacer
          </Button>
        </div>
      </div>

      <div id="planning-export" className="space-y-6">
        {CRENEAUX_PLANNING.map(creneau => (
          <Card key={creneau.value}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-display font-bold">
                  {creneau.icon} {creneau.label}
                </h2>
                <p className="text-gray-600">{creneau.heures}</p>
              </div>
            </div>

            {planning[creneau.value]?.length > 0 ? (
              <div className="space-y-3">
                {planning[creneau.value].map(projetId => {
                  const projet = getProjet(projetId)
                  return projet ? (
                    <div key={projetId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold">{projet.titre}</div>
                        <div className="text-sm text-gray-600">{projet.duree} min</div>
                      </div>
                      <button
                        onClick={() => removeFromPlanning(creneau.value, projetId)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ) : null
                })}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Aucune activité prévue</p>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Ajoutez des activités à votre planning depuis les fiches projets
        </p>
        <Button variant="primary" onClick={() => window.location.href = '/projets'}>
          Parcourir les projets
        </Button>
      </div>
    </div>
  )
}

export default Planning
