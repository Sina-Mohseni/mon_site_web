import { useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { NIVEAUX, LIEUX, BADGES, CATEGORIES, DUREES } from '../../utils/constants'
import Button from '../common/Button'

const ProjetFilters = ({ onFilterChange, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [localFilters, setLocalFilters] = useState(activeFilters || {
    search: '',
    niveaux: [],
    lieu: 'tous',
    duree: 'tous',
    badges: [],
    categorie: 'tous',
    coupDeCoeur: false,
    specialPluie: false
  })

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const toggleNiveau = (niveau) => {
    const niveaux = localFilters.niveaux.includes(niveau)
      ? localFilters.niveaux.filter(n => n !== niveau)
      : [...localFilters.niveaux, niveau]
    handleFilterChange('niveaux', niveaux)
  }

  const toggleBadge = (badge) => {
    const badges = localFilters.badges.includes(badge)
      ? localFilters.badges.filter(b => b !== badge)
      : [...localFilters.badges, badge]
    handleFilterChange('badges', badges)
  }

  const resetFilters = () => {
    const emptyFilters = {
      search: '',
      niveaux: [],
      lieu: 'tous',
      duree: 'tous',
      badges: [],
      categorie: 'tous',
      coupDeCoeur: false,
      specialPluie: false
    }
    setLocalFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  const hasActiveFilters = () => {
    return (
      localFilters.search ||
      localFilters.niveaux.length > 0 ||
      localFilters.lieu !== 'tous' ||
      localFilters.duree !== 'tous' ||
      localFilters.badges.length > 0 ||
      localFilters.categorie !== 'tous' ||
      localFilters.coupDeCoeur ||
      localFilters.specialPluie
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      {/* Barre de recherche */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher une activité..."
            value={localFilters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <Button
          variant={isOpen ? 'primary' : 'outline'}
          onClick={() => setIsOpen(!isOpen)}
          leftIcon={<SlidersHorizontal size={20} />}
        >
          Filtres
          {hasActiveFilters() && (
            <span className="ml-2 bg-accent-400 text-white text-xs px-2 py-0.5 rounded-full">
              •
            </span>
          )}
        </Button>

        {hasActiveFilters() && (
          <Button
            variant="ghost"
            onClick={resetFilters}
            leftIcon={<X size={20} />}
          >
            Réinitialiser
          </Button>
        )}
      </div>

      {/* Filtres avancés */}
      {isOpen && (
        <div className="pt-4 border-t border-gray-200 space-y-6">
          {/* Niveaux */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Niveaux</h4>
            <div className="flex flex-wrap gap-2">
              {NIVEAUX.map(niveau => (
                <button
                  key={niveau.value}
                  onClick={() => toggleNiveau(niveau.value)}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    ${localFilters.niveaux.includes(niveau.value)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {niveau.value}
                </button>
              ))}
            </div>
          </div>

          {/* Lieu */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Lieu</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('lieu', 'tous')}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-colors
                  ${localFilters.lieu === 'tous'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                Tous
              </button>
              {LIEUX.map(lieu => (
                <button
                  key={lieu.value}
                  onClick={() => handleFilterChange('lieu', lieu.value)}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    ${localFilters.lieu === lieu.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {lieu.icon} {lieu.label}
                </button>
              ))}
            </div>
          </div>

          {/* Durée */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Durée</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('duree', 'tous')}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-colors
                  ${localFilters.duree === 'tous'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                Toutes
              </button>
              {DUREES.map(duree => (
                <button
                  key={duree.value}
                  onClick={() => handleFilterChange('duree', duree.value)}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    ${localFilters.duree === duree.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {duree.label}
                </button>
              ))}
            </div>
          </div>

          {/* Catégorie */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Catégorie</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('categorie', 'tous')}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-colors
                  ${localFilters.categorie === 'tous'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                Toutes
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => handleFilterChange('categorie', cat.value)}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    ${localFilters.categorie === cat.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Type d'activité</h4>
            <div className="flex flex-wrap gap-2">
              {BADGES.map(badge => (
                <button
                  key={badge.value}
                  onClick={() => toggleBadge(badge.value)}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-sm transition-colors
                    ${localFilters.badges.includes(badge.value)
                      ? 'bg-primary-600 text-white'
                      : `${badge.color} hover:opacity-80`
                    }
                  `}
                >
                  {badge.label}
                </button>
              ))}
            </div>
          </div>

          {/* Options spéciales */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Options</h4>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.coupDeCoeur}
                  onChange={(e) => handleFilterChange('coupDeCoeur', e.target.checked)}
                  className="w-5 h-5 text-accent-500 border-gray-300 rounded focus:ring-accent-500"
                />
                <span className="text-sm text-gray-700">Coups de cœur uniquement</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.specialPluie}
                  onChange={(e) => handleFilterChange('specialPluie', e.target.checked)}
                  className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Spécial pluie</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjetFilters
