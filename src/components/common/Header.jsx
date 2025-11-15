import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Book, Home, FileText, Lightbulb, GraduationCap, AlertCircle, Calendar, Heart, PlusCircle, Info } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/projets', label: 'Projets', icon: Book },
    { path: '/mode-urgence', label: 'Mode Urgence', icon: AlertCircle, highlight: true },
    { path: '/astuces', label: 'Astuces', icon: Lightbulb },
    { path: '/tutos', label: 'Tutos', icon: GraduationCap },
    { path: '/psaadrafra', label: 'PSAADRAFRA', icon: FileText },
    { path: '/planning', label: 'Planning', icon: Calendar },
    { path: '/mon-carnet', label: 'Mon Carnet', icon: Heart },
    { path: '/creer-projet', label: 'Créer', icon: PlusCircle },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">A'C</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-gray-900">
                Anim'Connect
              </h1>
              <p className="text-xs text-gray-500">Carnet de l'animateur</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${active
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                    ${item.highlight ? 'ring-2 ring-accent-400 ring-offset-2' : ''}
                  `}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors
                      ${active
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                      ${item.highlight ? 'ring-2 ring-accent-400' : ''}
                    `}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}

              {/* Lien À propos en mobile */}
              <Link
                to="/a-propos"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
              >
                <Info size={20} />
                <span>À propos</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
