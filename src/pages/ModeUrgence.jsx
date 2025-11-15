import { useState } from 'react'
import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { AlertCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { suggestProjetsUrgence } from '../services/projetFilters'
import { NIVEAUX, LIEUX, DUREES } from '../utils/constants'
import projetsData from '../data/projets.json'

const ModeUrgence = () => {
  const [criteres, setCriteres] = useState({
    niveaux: [],
    duree: '',
    lieu: '',
    materiel: ''
  })
  const [suggestions, setSuggestions] = useState([])

  const handleSearch = () => {
    if (criteres.niveaux.length > 0) {
      const results = suggestProjetsUrgence(projetsData, criteres)
      setSuggestions(results)
    }
  }

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Mode Urgence' }]} />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
            <AlertCircle className="text-accent-600" size={32} />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Mode Urgence</h1>
          <p className="text-lg text-gray-600">
            Trouvez une activité adaptée en quelques secondes
          </p>
        </div>

        <Card>
          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Niveaux *</label>
              <div className="flex flex-wrap gap-2">
                {NIVEAUX.map(niveau => (
                  <button
                    key={niveau.value}
                    onClick={() => {
                      const niveaux = criteres.niveaux.includes(niveau.value)
                        ? criteres.niveaux.filter(n => n !== niveau.value)
                        : [...criteres.niveaux, niveau.value]
                      setCriteres({ ...criteres, niveaux })
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${criteres.niveaux.includes(niveau.value) ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {niveau.value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Durée disponible</label>
              <select
                value={criteres.duree}
                onChange={(e) => setCriteres({ ...criteres, duree: e.target.value })}
                className="input"
              >
                <option value="">Peu importe</option>
                {DUREES.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Lieu</label>
              <select
                value={criteres.lieu}
                onChange={(e) => setCriteres({ ...criteres, lieu: e.target.value })}
                className="input"
              >
                <option value="">Peu importe</option>
                {LIEUX.map(l => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Matériel disponible</label>
              <select
                value={criteres.materiel}
                onChange={(e) => setCriteres({ ...criteres, materiel: e.target.value })}
                className="input"
              >
                <option value="">Peu importe</option>
                <option value="aucun">Aucun matériel</option>
                <option value="peu">Peu de matériel</option>
                <option value="beaucoup">Beaucoup de matériel</option>
              </select>
            </div>

            <Button
              fullWidth
              size="lg"
              onClick={handleSearch}
              disabled={criteres.niveaux.length === 0}
            >
              Trouver une activité
            </Button>
          </div>
        </Card>

        {suggestions.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-display font-bold mb-4">
              Suggestions ({suggestions.length})
            </h2>
            <div className="space-y-4">
              {suggestions.map(projet => (
                <Card key={projet.id} hover>
                  <h3 className="text-xl font-bold mb-2">{projet.titre}</h3>
                  <p className="text-gray-600 mb-4">{projet.description}</p>
                  <Link to={`/projets/${projet.id}/fiche`}>
                    <Button>
                      Voir la fiche
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}

        {suggestions.length === 0 && criteres.niveaux.length > 0 && (
          <div className="mt-8 text-center text-gray-600">
            Aucune suggestion ne correspond à vos critères. Essayez d'élargir votre recherche.
          </div>
        )}
      </div>
    </div>
  )
}

export default ModeUrgence
