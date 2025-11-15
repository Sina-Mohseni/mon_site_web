import { Breadcrumb } from '../components/common/Navigation'
import { Link } from 'react-router-dom'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { Book } from 'lucide-react'
import psaadrafraData from '../data/psaadrafra-exemples.json'

const PSAADRAFRA = () => {
  const { definition } = psaadrafraData

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'PSAADRAFRA' }]} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">{definition.titre}</h1>
        <p className="text-lg text-gray-600 mb-8">{definition.description}</p>

        <Card className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-6">Les 10 étapes de PSAADRAFRA</h2>
          <div className="space-y-4">
            {definition.lettres.map((lettre, i) => (
              <div key={i} className="border-l-4 border-primary-600 pl-4 py-2">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-primary-600 mr-3">{lettre.lettre}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{lettre.nom}</h3>
                    <p className="text-gray-600">{lettre.description}</p>
                    <p className="text-sm text-primary-600 italic mt-1">{lettre.question}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <Link to="/psaadrafra/modeles">
            <Button size="lg" leftIcon={<Book size={20} />}>
              Voir les modèles et exemples
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PSAADRAFRA
