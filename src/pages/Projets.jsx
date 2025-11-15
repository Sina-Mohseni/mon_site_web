import { useState, useMemo } from 'react'
import { Breadcrumb } from '../components/common/Navigation'
import ProjetCard from '../components/projet/ProjetCard'
import ProjetFilters from '../components/projet/ProjetFilters'
import { filterProjets, sortProjets } from '../services/projetFilters'
import projetsData from '../data/projets.json'

const Projets = () => {
  const [filters, setFilters] = useState({
    search: '',
    niveaux: [],
    lieu: 'tous',
    duree: 'tous',
    badges: [],
    categorie: 'tous',
    coupDeCoeur: false,
    specialPluie: false
  })

  const [sortBy, setSortBy] = useState('recent')

  const projetsFiltres = useMemo(() => {
    const filtered = filterProjets(projetsData, filters)
    return sortProjets(filtered, sortBy)
  }, [filters, sortBy])

  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Projets' }]} />

      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Projets d'animation
        </h1>
        <p className="text-lg text-gray-600">
          {projetsData.length} projets disponibles • {projetsFiltres.length} affichés
        </p>
      </div>

      <ProjetFilters
        onFilterChange={setFilters}
        activeFilters={filters}
      />

      {/* Tri */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          <span className="font-semibold">{projetsFiltres.length}</span> projet{projetsFiltres.length > 1 ? 's' : ''} trouvé{projetsFiltres.length > 1 ? 's' : ''}
        </p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="recent">Plus récents</option>
          <option value="titre-asc">Titre (A-Z)</option>
          <option value="titre-desc">Titre (Z-A)</option>
          <option value="duree-asc">Durée (croissante)</option>
          <option value="duree-desc">Durée (décroissante)</option>
        </select>
      </div>

      {/* Grille de projets */}
      {projetsFiltres.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetsFiltres.map(projet => (
            <ProjetCard key={projet.id} projet={projet} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-4">
            Aucun projet ne correspond à vos critères
          </p>
          <button
            onClick={() => setFilters({
              search: '',
              niveaux: [],
              lieu: 'tous',
              duree: 'tous',
              badges: [],
              categorie: 'tous',
              coupDeCoeur: false,
              specialPluie: false
            })}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  )
}

export default Projets
