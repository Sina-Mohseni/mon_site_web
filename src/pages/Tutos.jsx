import { useState } from 'react'
import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import { Clock } from 'lucide-react'
import tutosData from '../data/tutos.json'

const Tutos = () => {
  const [selectedTuto, setSelectedTuto] = useState(null)

  if (selectedTuto) {
    const tuto = tutosData.find(t => t.id === selectedTuto)
    return (
      <div className="container-custom py-8">
        <button onClick={() => setSelectedTuto(null)} className="text-primary-600 hover:underline mb-6">
          ← Retour aux tutos
        </button>

        <h1 className="text-3xl font-display font-bold mb-4">{tuto.titre}</h1>

        <div className="flex items-center gap-4 mb-6">
          <span className="badge bg-blue-100 text-blue-800">{tuto.categorie}</span>
          <span className="badge bg-green-100 text-green-800">{tuto.niveau}</span>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            {tuto.duree}
          </div>
        </div>

        <Card className="mb-6">
          <h2 className="font-bold mb-2">Objectif</h2>
          <p>{tuto.objectif}</p>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">Contenu</h2>
          <p className="mb-6">{tuto.contenu.introduction}</p>

          <div className="space-y-6">
            {tuto.contenu.etapes.map(etape => (
              <div key={etape.numero} className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-bold text-lg mb-2">
                  Étape {etape.numero}: {etape.titre}
                </h3>
                <p className="text-gray-700 mb-2">{etape.description}</p>
                <p className="text-sm text-primary-600 italic">💡 {etape.conseil}</p>
              </div>
            ))}
          </div>

          {tuto.contenu.erreurs_frequentes && (
            <div className="mt-8 p-4 bg-red-50 rounded-lg">
              <h3 className="font-bold mb-2">⚠️ Erreurs fréquentes</h3>
              <ul className="space-y-1">
                {tuto.contenu.erreurs_frequentes.map((erreur, i) => (
                  <li key={i} className="text-sm">• {erreur}</li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Tutos' }]} />

      <h1 className="text-4xl font-display font-bold mb-4">Mini-formations</h1>
      <p className="text-lg text-gray-600 mb-8">
        Progressez comme animateur avec ces tutos pratiques
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutosData.map(tuto => (
          <Card key={tuto.id} hover onClick={() => setSelectedTuto(tuto.id)}>
            <div className="flex items-start justify-between mb-3">
              <span className="badge bg-blue-100 text-blue-800">{tuto.categorie}</span>
              <span className="badge bg-green-100 text-green-800 capitalize">{tuto.niveau}</span>
            </div>

            <h3 className="text-xl font-display font-bold mb-2">{tuto.titre}</h3>

            <div className="flex items-center text-gray-600 text-sm mb-3">
              <Clock size={16} className="mr-1" />
              {tuto.duree}
            </div>

            <p className="text-gray-700 text-sm">{tuto.objectif}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Tutos
