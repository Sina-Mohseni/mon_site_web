import { BADGES, NIVEAUX, LIEUX, CATEGORIES } from './constants'

/**
 * Récupère le label d'un badge à partir de sa valeur
 */
export const getBadgeLabel = (value) => {
  const badge = BADGES.find(b => b.value === value)
  return badge ? badge.label : value
}

/**
 * Récupère la couleur d'un badge à partir de sa valeur
 */
export const getBadgeColor = (value) => {
  const badge = BADGES.find(b => b.value === value)
  return badge ? badge.color : 'bg-gray-100 text-gray-800'
}

/**
 * Récupère le label d'un niveau
 */
export const getNiveauLabel = (value) => {
  const niveau = NIVEAUX.find(n => n.value === value)
  return niveau ? niveau.label : value
}

/**
 * Récupère le label d'un lieu
 */
export const getLieuLabel = (value) => {
  const lieu = LIEUX.find(l => l.value === value)
  return lieu ? lieu.label : value
}

/**
 * Récupère le label et l'icône d'une catégorie
 */
export const getCategorieInfo = (value) => {
  const categorie = CATEGORIES.find(c => c.value === value)
  return categorie || { label: value, icon: '📌' }
}

/**
 * Formate une durée en minutes en format lisible
 */
export const formatDuree = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const heures = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${heures}h${mins.toString().padStart(2, '0')}` : `${heures}h`
}

/**
 * Vérifie si une durée en minutes correspond à une plage
 */
export const isDureeInRange = (duree, range) => {
  const [min, max] = range.split('-').map(v => v === '60+' ? 999 : parseInt(v))
  return duree >= min && (max ? duree <= max : true)
}

/**
 * Tronque un texte à une longueur donnée
 */
export const truncate = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

/**
 * Génère un ID unique
 */
export const generateId = () => {
  return `proj-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Convertit une liste de niveaux en affichage compact
 * Ex: ['PS', 'MS', 'GS'] => 'PS → GS'
 */
export const formatNiveauxRange = (niveaux) => {
  if (!niveaux || niveaux.length === 0) return ''
  if (niveaux.length === 1) return niveaux[0]

  // Tri des niveaux selon l'ordre NIVEAUX
  const niveauxOrdonnes = [...niveaux].sort((a, b) => {
    const indexA = NIVEAUX.findIndex(n => n.value === a)
    const indexB = NIVEAUX.findIndex(n => n.value === b)
    return indexA - indexB
  })

  // Si les niveaux sont consécutifs, afficher comme une plage
  const premier = niveauxOrdonnes[0]
  const dernier = niveauxOrdonnes[niveauxOrdonnes.length - 1]

  const indexPremier = NIVEAUX.findIndex(n => n.value === premier)
  const indexDernier = NIVEAUX.findIndex(n => n.value === dernier)

  // Vérifier si tous les niveaux entre le premier et le dernier sont présents
  const tousConsecutifs = niveauxOrdonnes.length === (indexDernier - indexPremier + 1)

  if (tousConsecutifs && niveauxOrdonnes.length > 2) {
    return `${premier} → ${dernier}`
  }

  return niveauxOrdonnes.join(', ')
}

/**
 * Détermine si un projet correspond à un niveau donné
 */
export const projetMatchNiveau = (projet, niveau) => {
  return projet.niveaux.includes(niveau)
}

/**
 * Détermine si un projet correspond à une recherche textuelle
 */
export const projetMatchSearch = (projet, searchTerm) => {
  if (!searchTerm) return true

  const term = searchTerm.toLowerCase()
  return (
    projet.titre.toLowerCase().includes(term) ||
    projet.description.toLowerCase().includes(term) ||
    projet.badges.some(b => getBadgeLabel(b).toLowerCase().includes(term))
  )
}

/**
 * Scroll vers le haut de la page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * Vérifie si on est sur mobile
 */
export const isMobile = () => {
  return window.innerWidth < 768
}
