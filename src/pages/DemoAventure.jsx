import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Play } from 'lucide-react'
import { Breadcrumb } from '../components/common/Navigation'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import projetsData from '../data/projets.json'

const DemoAventure = () => {
  const { id } = useParams()
  const projet = projetsData.find(p => p.id === id)
  const [etapeActuelle, setEtapeActuelle] = useState('introduction')
  const [historique, setHistorique] = useState([])

  if (!projet || !projet.demo) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Démo non disponible</h1>
        <Link to="/projets" className="text-primary-600 hover:underline">
          Retour aux projets
        </Link>
      </div>
    )
  }

  const demo = projet.demo.histoire

  const handleChoix = (choix) => {
    setHistorique([...historique, { etape: etapeActuelle, choix: choix.texte }])
    setEtapeActuelle(choix.suivant)
  }

  const resetDemo = () => {
    setEtapeActuelle('introduction')
    setHistorique([])
  }

  const renderContent = () => {
    if (etapeActuelle === 'introduction') {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎭 {demo.introduction}</h2>
          <Button onClick={() => setEtapeActuelle('etape1')} leftIcon={<Play size={20} />}>
            Commencer l'aventure
          </Button>
        </div>
      )
    }

    if (etapeActuelle === 'fin') {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 {demo.conclusion}</h2>
          <div className="space-y-3">
            <Button onClick={resetDemo}>Recommencer</Button>
            <Link to={`/projets/${id}/fiche`}>
              <Button variant="outline">Voir la fiche complète</Button>
            </Link>
          </div>
        </div>
      )
    }

    const etape = demo.etapes.find(e => e.id === etapeActuelle)
    if (!etape) return null

    return (
      <div>
        <p className="text-lg mb-6">{etape.texte}</p>
        <div className="space-y-3">
          {etape.choix.map((choix, i) => (
            <button
              key={i}
              onClick={() => {
                // Afficher d'abord la réponse
                alert(choix.reponse)
                handleChoix(choix)
              }}
              className="w-full text-left p-4 bg-white border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors"
            >
              {choix.texte}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { path: '/projets', label: 'Projets' },
          { path: `/projets/${id}/fiche`, label: projet.titre },
          { label: 'Démo' }
        ]}
      />

      <Link to={`/projets/${id}/fiche`} className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Retour à la fiche
      </Link>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-6">
          <h1 className="text-3xl font-display font-bold mb-2">{projet.titre}</h1>
          <p className="text-gray-600">Démo interactive</p>
        </Card>

        <Card padding="lg">
          {renderContent()}
        </Card>

        {historique.length > 0 && (
          <Card className="mt-6">
            <h3 className="font-semibold mb-2">Votre parcours :</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {historique.map((h, i) => (
                <li key={i}>→ {h.choix}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  )
}

export default DemoAventure
