import { Link } from 'react-router-dom'
import { Clock, MapPin, Users, Heart, Sparkles, FileText } from 'lucide-react'
import Card from '../common/Card'
import { formatDuree, getBadgeColor, getBadgeLabel, getLieuLabel, formatNiveauxRange } from '../../utils/helpers'
import { useFavoris } from '../../hooks/useFavoris'

const ProjetCard = ({ projet }) => {
  const { isFavori, toggleFavori } = useFavoris()
  const estFavori = isFavori(projet.id)

  const handleFavoriClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavori(projet.id)
  }

  return (
    <Card hover className="relative group">
      {/* Badge coup de coeur */}
      {projet.coupDeCoeur && (
        <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-md">
          <Sparkles size={14} />
          <span>Coup de cœur</span>
        </div>
      )}

      {/* Bouton favori */}
      <button
        onClick={handleFavoriClick}
        className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all z-10"
        aria-label={estFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      >
        <Heart
          size={20}
          className={estFavori ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}
        />
      </button>

      <div className="mt-8">
        {/* Titre */}
        <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {projet.titre}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {projet.description}
        </p>

        {/* Informations principales */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <Users size={16} className="text-primary-600" />
            <span>{formatNiveauxRange(projet.niveaux)}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <Clock size={16} className="text-primary-600" />
            <span>{formatDuree(projet.duree)}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <MapPin size={16} className="text-primary-600" />
            <span>{getLieuLabel(projet.lieu)}</span>
          </div>

          <div className="text-sm text-gray-700">
            {projet.materiel.length === 0 ? (
              <span className="badge bg-indigo-100 text-indigo-800">
                Sans matériel
              </span>
            ) : (
              <span className="text-xs text-gray-500">
                {projet.materiel.length} éléments
              </span>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {projet.badges.slice(0, 3).map(badge => (
            <span
              key={badge}
              className={`badge ${getBadgeColor(badge)}`}
            >
              {getBadgeLabel(badge)}
            </span>
          ))}
          {projet.badges.length > 3 && (
            <span className="badge bg-gray-100 text-gray-600">
              +{projet.badges.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            to={`/projets/${projet.id}/fiche`}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
          >
            <FileText size={16} />
            <span>Fiche</span>
          </Link>

          <Link
            to={`/projets/${projet.id}/demo`}
            className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium text-sm"
          >
            <Sparkles size={16} />
            <span>Démo</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default ProjetCard
