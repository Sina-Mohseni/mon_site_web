import { Link } from 'react-router-dom'
import { Book, AlertCircle, PlusCircle, Sparkles, Heart, Calendar, ArrowRight, Lightbulb, GraduationCap } from 'lucide-react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import projetsData from '../data/projets.json'

const Accueil = () => {
  // Récupérer les projets coup de cœur
  const coupDeCoeur = projetsData.filter(p => p.coupDeCoeur).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
              Bienvenue sur Anim'Connect
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-balance">
              Le carnet numérique de l'animateur pour groupes PS à CM2
            </p>
            <p className="text-lg mb-12 text-blue-50 max-w-2xl mx-auto">
              Trouvez des activités, créez vos fiches, gérez votre planning.
              Gratuit, sans inscription, 100% local.
            </p>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projets">
                <Button size="lg" variant="accent" leftIcon={<Book size={24} />}>
                  Explorer les projets
                </Button>
              </Link>
              <Link to="/mode-urgence">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-gray-100"
                  leftIcon={<AlertCircle size={24} />}
                >
                  Mode Urgence
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Raccourcis rapides */}
      <section className="container-custom py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Que voulez-vous faire ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Chercher une activité */}
          <Link to="/projets">
            <Card hover className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Book className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Chercher une activité
                </h3>
                <p className="text-gray-600 mb-4">
                  Parcourez notre catalogue de projets avec filtres par âge, durée, lieu, etc.
                </p>
                <div className="flex items-center text-primary-600 font-medium mt-auto">
                  <span>Voir les projets</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </Card>
          </Link>

          {/* Préparer ma journée */}
          <Link to="/planning">
            <Card hover className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-secondary-600" size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Préparer ma journée
                </h3>
                <p className="text-gray-600 mb-4">
                  Organisez votre planning avec les projets de votre choix.
                </p>
                <div className="flex items-center text-secondary-600 font-medium mt-auto">
                  <span>Créer un planning</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </Card>
          </Link>

          {/* Créer un projet */}
          <Link to="/creer-projet">
            <Card hover className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                  <PlusCircle className="text-accent-600" size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Créer un projet
                </h3>
                <p className="text-gray-600 mb-4">
                  Concevez rapidement une fiche projet et exportez-la en PDF.
                </p>
                <div className="flex items-center text-accent-600 font-medium mt-auto">
                  <span>Commencer</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Coups de cœur */}
      {coupDeCoeur.length > 0 && (
        <section className="bg-gradient-to-br from-accent-50 to-orange-50 py-16">
          <div className="container-custom">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="text-accent-500 mr-3" size={32} />
              <h2 className="text-3xl font-display font-bold">
                Nos coups de cœur
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coupDeCoeur.map(projet => (
                <Card key={projet.id} hover>
                  <h3 className="text-lg font-display font-bold mb-2">
                    {projet.titre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {projet.description}
                  </p>
                  <Link
                    to={`/projets/${projet.id}/fiche`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Voir la fiche
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ressources */}
      <section className="container-custom py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Progressez comme animateur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/astuces">
            <Card hover className="h-full">
              <Lightbulb className="text-yellow-500 mb-4" size={40} />
              <h3 className="text-xl font-display font-bold mb-2">
                Astuces d'animation
              </h3>
              <p className="text-gray-600 text-sm">
                Des conseils pratiques pour gérer votre groupe au quotidien.
              </p>
            </Card>
          </Link>

          <Link to="/tutos">
            <Card hover className="h-full">
              <GraduationCap className="text-blue-500 mb-4" size={40} />
              <h3 className="text-xl font-display font-bold mb-2">
                Mini-formations
              </h3>
              <p className="text-gray-600 text-sm">
                Apprenez à expliquer un jeu, gérer un groupe multi-âges, etc.
              </p>
            </Card>
          </Link>

          <Link to="/psaadrafra">
            <Card hover className="h-full">
              <Book className="text-purple-500 mb-4" size={40} />
              <h3 className="text-xl font-display font-bold mb-2">
                Méthode PSAADRAFRA
              </h3>
              <p className="text-gray-600 text-sm">
                Maîtrisez cette méthode pour concevoir des activités solides.
              </p>
            </Card>
          </Link>
        </div>
      </section>

      {/* Call to action final */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Prêt à vous lancer ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Aucune inscription nécessaire. Toutes vos données restent sur votre appareil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projets">
              <Button size="lg" variant="accent">
                Explorer les projets
              </Button>
            </Link>
            <Link to="/guide">
              <Button size="lg" className="bg-gray-700 text-white hover:bg-gray-600">
                Guide d'utilisation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accueil
