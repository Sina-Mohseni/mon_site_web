import { Breadcrumb } from '../components/common/Navigation'
import Card from '../components/common/Card'
import { Heart, Shield, Zap } from 'lucide-react'

const APropos = () => {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'À propos' }]} />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-6">À propos d'Anim'Connect</h1>

        <Card className="mb-6">
          <h2 className="text-2xl font-display font-bold mb-4">Notre mission</h2>
          <p className="text-gray-700 mb-4">
            Anim'Connect est né d'une volonté simple : faciliter le quotidien des animateurs
            en accueil de loisirs et centres de vacances. Après plusieurs années d'expérience
            auprès de groupes d'enfants PS à CM2, j'ai créé cet outil pour centraliser les
            ressources, astuces et projets d'animation qui m'ont été utiles.
          </p>
          <p className="text-gray-700">
            L'objectif est d'offrir un carnet numérique gratuit, sans inscription, et
            respectueux de votre vie privée, où chaque animateur peut trouver l'inspiration
            et les outils pour animer avec confiance.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <Zap className="mx-auto text-accent-500 mb-3" size={40} />
            <h3 className="font-bold mb-2">Rapide</h3>
            <p className="text-sm text-gray-600">
              Mode urgence pour trouver une activité en quelques clics
            </p>
          </Card>

          <Card className="text-center">
            <Shield className="mx-auto text-blue-500 mb-3" size={40} />
            <h3 className="font-bold mb-2">Privé</h3>
            <p className="text-sm text-gray-600">
              Toutes vos données restent sur votre appareil
            </p>
          </Card>

          <Card className="text-center">
            <Heart className="mx-auto text-red-500 mb-3" size={40} />
            <h3 className="font-bold mb-2">Gratuit</h3>
            <p className="text-sm text-gray-600">
              100% gratuit, sans publicité, sans abonnement
            </p>
          </Card>
        </div>

        <Card>
          <h2 className="text-2xl font-display font-bold mb-4">Qui suis-je ?</h2>
          <p className="text-gray-700 mb-4">
            Je suis animateur depuis plusieurs années, passionné par l'accompagnement
            des enfants de la petite section au CM2. J'ai travaillé en centres de loisirs,
            en accueils périscolaires et en séjours de vacances.
          </p>
          <p className="text-gray-700">
            Ce site est le fruit de mon expérience terrain, des formations suivies,
            et des échanges avec mes collègues animateurs. J'espère qu'il vous sera
            aussi utile qu'il l'est pour moi !
          </p>
        </Card>
      </div>
    </div>
  )
}

export default APropos
