import { useState } from 'react'
import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import { CATEGORIES_ASTUCES } from '../utils/constants'
import astucesData from '../data/astuces.json'

const Astuces = () => {
  const [categorieActive, setCategorieActive] = useState('tous')

  const astucesAffichees = categorieActive === 'tous'
    ? astucesData
    : astucesData.filter(a => a.categorie === categorieActive)

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Astuces' }]} />

      <h1 className="text-4xl font-display font-bold mb-4">Astuces d'animation</h1>
      <p className="text-lg text-gray-600 mb-8">
        Des conseils pratiques pour votre quotidien d'animateur
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCategorieActive('tous')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${categorieActive === 'tous' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Toutes
        </button>
        {CATEGORIES_ASTUCES.map(cat => (
          <button
            key={cat.value}
            onClick={() => setCategorieActive(cat.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${categorieActive === cat.value ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {astucesAffichees.map(astuce => (
          <Card key={astuce.id}>
            <h3 className="text-xl font-display font-bold mb-2">{astuce.titre}</h3>
            <p className="text-sm text-gray-600 mb-4">{astuce.contexte}</p>

            <div className="mb-3">
              <span className="badge bg-blue-100 text-blue-800">
                {astuce.niveaux[0]} → {astuce.niveaux[astuce.niveaux.length - 1]}
              </span>
            </div>

            <ul className="space-y-2">
              {astuce.conseils.map((conseil, i) => (
                <li key={i} className="flex items-start text-sm">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>{conseil}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">💡 {astuce.pourquoi}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Astuces
