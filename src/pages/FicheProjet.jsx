import { useParams, Link } from 'react-router-dom'
import { Clock, MapPin, Users, Download, Heart, BookmarkPlus, Calendar, ArrowLeft, Sparkles } from 'lucide-react'
import { Breadcrumb } from '../components/common/Navigation'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { useFavoris, useATester } from '../hooks/useFavoris'
import { formatDuree, getBadgeColor, getBadgeLabel, getLieuLabel, formatNiveauxRange } from '../utils/helpers'
import { exportFicheProjetPDF, printElement } from '../services/pdfExport'
import projetsData from '../data/projets.json'

const FicheProjet = () => {
  const { id } = useParams()
  const projet = projetsData.find(p => p.id === id)

  const { isFavori, toggleFavori } = useFavoris()
  const { isATester, toggleATester } = useATester()

  if (!projet) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Projet introuvable</h1>
        <Link to="/projets" className="text-primary-600 hover:underline">
          Retour aux projets
        </Link>
      </div>
    )
  }

  const handleExportPDF = () => {
    printElement('fiche-projet-export')
  }

  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { path: '/projets', label: 'Projets' },
          { label: projet.titre }
        ]}
      />

      <div className="mb-6">
        <Link
          to="/projets"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour aux projets
        </Link>
      </div>

      {/* Contenu exportable */}
      <div id="fiche-projet-export">
        {/* En-tête */}
        <Card className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                {projet.titre}
              </h1>
              <p className="text-lg text-gray-600">{projet.description}</p>
            </div>

            {projet.coupDeCoeur && (
              <div className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Sparkles size={16} className="mr-1" />
                Coup de cœur
              </div>
            )}
          </div>

          {/* Infos principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Niveaux</div>
              <div className="flex items-center text-gray-900 font-medium">
                <Users size={18} className="mr-2 text-primary-600" />
                {formatNiveauxRange(projet.niveaux)}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Durée</div>
              <div className="flex items-center text-gray-900 font-medium">
                <Clock size={18} className="mr-2 text-primary-600" />
                {formatDuree(projet.duree)}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Lieu</div>
              <div className="flex items-center text-gray-900 font-medium">
                <MapPin size={18} className="mr-2 text-primary-600" />
                {getLieuLabel(projet.lieu)}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Catégorie</div>
              <div className="text-gray-900 font-medium capitalize">
                {projet.categorie.replace('-', ' ')}
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {projet.badges.map(badge => (
              <span key={badge} className={`badge ${getBadgeColor(badge)}`}>
                {getBadgeLabel(badge)}
              </span>
            ))}
          </div>
        </Card>

        {/* Actions rapides */}
        <div className="flex flex-wrap gap-3 mb-6 no-print">
          <Button
            variant={isFavori(projet.id) ? 'primary' : 'outline'}
            onClick={() => toggleFavori(projet.id)}
            leftIcon={<Heart size={20} className={isFavori(projet.id) ? 'fill-current' : ''} />}
          >
            {isFavori(projet.id) ? 'Dans mes favoris' : 'Ajouter aux favoris'}
          </Button>

          <Button
            variant={isATester(projet.id) ? 'secondary' : 'outline'}
            onClick={() => toggleATester(projet.id)}
            leftIcon={<BookmarkPlus size={20} />}
          >
            {isATester(projet.id) ? 'À tester' : 'Ajouter à tester'}
          </Button>

          <Link to={`/projets/${projet.id}/demo`}>
            <Button variant="outline" leftIcon={<Sparkles size={20} />}>
              Voir la démo
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={handleExportPDF}
            leftIcon={<Download size={20} />}
          >
            Exporter en PDF
          </Button>
        </div>

        {/* Objectifs */}
        <Card className="mb-6">
          <h2 className="text-2xl font-display font-bold mb-4">Objectifs pédagogiques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Objectifs principaux</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {projet.objectifs.pedagogiques.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Compétences développées</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {projet.objectifs.competences.map((comp, i) => (
                  <li key={i}>{comp}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Matériel */}
        <Card className="mb-6">
          <h2 className="text-2xl font-display font-bold mb-4">Matériel nécessaire</h2>
          {projet.materiel.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {projet.materiel.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Aucun matériel nécessaire</p>
          )}
        </Card>

        {/* PSAADRAFRA */}
        <Card className="mb-6">
          <h2 className="text-2xl font-display font-bold mb-6">Déroulé détaillé (PSAADRAFRA)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-primary-600 mb-2">📋 Présentation</h3>
              <p className="text-gray-700">{projet.psaadrafra.presentation}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">🎯 Sujet de l'activité</h3>
              <p className="text-gray-700">{projet.psaadrafra.sujetActivite}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">👶 Adaptation par âge</h3>
              {Object.entries(projet.psaadrafra.age).map(([niveau, adaptation]) => (
                <div key={niveau} className="mb-2">
                  <span className="font-medium">{niveau}:</span> {adaptation}
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">🤝 Appropriation</h3>
              <p className="text-gray-700">{projet.psaadrafra.appropriation}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">⏱️ Déroulement</h3>
              <div className="space-y-3">
                {projet.psaadrafra.deroulement.map((etape, i) => (
                  <div key={i} className="border-l-4 border-primary-600 pl-4">
                    <div className="font-medium text-gray-900">
                      {etape.etape} ({etape.duree} min)
                    </div>
                    <div className="text-gray-700">{etape.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">🧹 Rangement</h3>
              <p className="text-gray-700">{projet.psaadrafra.rangement}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">📊 Analyse</h3>
              <p className="text-gray-700">{projet.psaadrafra.analyse}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">💬 Feedback</h3>
              <p className="text-gray-700">{projet.psaadrafra.feedback}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">🔄 Réactivation</h3>
              <p className="text-gray-700">{projet.psaadrafra.reactivation}</p>
            </div>

            <div>
              <h3 className="font-semibold text-primary-600 mb-2">✨ Amélioration</h3>
              <p className="text-gray-700">{projet.psaadrafra.amelioration}</p>
            </div>
          </div>
        </Card>

        {/* Variantes */}
        {projet.variantes && projet.variantes.length > 0 && (
          <Card className="mb-6">
            <h2 className="text-2xl font-display font-bold mb-4">Variantes possibles</h2>
            <div className="space-y-3">
              {projet.variantes.map((variante, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-gray-900">{variante.titre}</h3>
                  <p className="text-gray-700">{variante.description}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Astuces animateur */}
        {projet.astucesAnimateur && projet.astucesAnimateur.length > 0 && (
          <Card>
            <h2 className="text-2xl font-display font-bold mb-4">💡 Astuces d'animateur</h2>
            <ul className="space-y-2">
              {projet.astucesAnimateur.map((astuce, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">{astuce}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  )
}

export default FicheProjet
