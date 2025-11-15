import { Link } from 'react-router-dom'
import { Heart, Github, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-lg">
              Anim'Connect
            </h3>
            <p className="text-sm text-gray-400">
              Le carnet numérique de l'animateur pour les groupes PS à CM2.
              Gratuit, sans inscription, 100% local.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span>Fait avec</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>par un animateur</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projets" className="hover:text-white transition-colors">
                  Projets d'animation
                </Link>
              </li>
              <li>
                <Link to="/mode-urgence" className="hover:text-white transition-colors">
                  Mode Urgence
                </Link>
              </li>
              <li>
                <Link to="/astuces" className="hover:text-white transition-colors">
                  Astuces
                </Link>
              </li>
              <li>
                <Link to="/tutos" className="hover:text-white transition-colors">
                  Tutos
                </Link>
              </li>
              <li>
                <Link to="/planning" className="hover:text-white transition-colors">
                  Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/psaadrafra" className="hover:text-white transition-colors">
                  Méthode PSAADRAFRA
                </Link>
              </li>
              <li>
                <Link to="/psaadrafra/modeles" className="hover:text-white transition-colors">
                  Modèles de fiches
                </Link>
              </li>
              <li>
                <Link to="/creer-projet" className="hover:text-white transition-colors">
                  Créer un projet
                </Link>
              </li>
              <li>
                <Link to="/guide" className="hover:text-white transition-colors">
                  Guide d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/mentions" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Toutes les données sont stockées localement sur votre appareil.
                Aucune donnée n'est envoyée à un serveur.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Anim'Connect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
