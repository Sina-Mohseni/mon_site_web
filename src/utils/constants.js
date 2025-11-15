// Niveaux scolaires
export const NIVEAUX = [
  { value: 'PS', label: 'Petite Section', categorie: 'maternelle' },
  { value: 'MS', label: 'Moyenne Section', categorie: 'maternelle' },
  { value: 'GS', label: 'Grande Section', categorie: 'maternelle' },
  { value: 'CP', label: 'CP', categorie: 'elementaire' },
  { value: 'CE1', label: 'CE1', categorie: 'elementaire' },
  { value: 'CE2', label: 'CE2', categorie: 'elementaire' },
  { value: 'CM1', label: 'CM1', categorie: 'elementaire' },
  { value: 'CM2', label: 'CM2', categorie: 'elementaire' },
]

// Lieux d'activité
export const LIEUX = [
  { value: 'interieur', label: 'Intérieur', icon: '🏠' },
  { value: 'exterieur', label: 'Extérieur', icon: '🌳' },
  { value: 'interieur-exterieur', label: 'Intérieur/Extérieur', icon: '🏠🌳' },
]

// Badges / tags pour les activités
export const BADGES = [
  { value: 'cooperatif', label: 'Coopératif', color: 'bg-blue-100 text-blue-800' },
  { value: 'creatif', label: 'Créatif', color: 'bg-purple-100 text-purple-800' },
  { value: 'calme', label: 'Calme', color: 'bg-green-100 text-green-800' },
  { value: 'defouloir', label: 'Défouloir', color: 'bg-red-100 text-red-800' },
  { value: 'educatif', label: 'Éducatif', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'peu-materiel', label: 'Peu de matériel', color: 'bg-gray-100 text-gray-800' },
  { value: 'sans-materiel', label: 'Sans matériel', color: 'bg-indigo-100 text-indigo-800' },
  { value: 'recup', label: 'Récup', color: 'bg-teal-100 text-teal-800' },
]

// Catégories d'activités
export const CATEGORIES = [
  { value: 'sport', label: 'Sport', icon: '⚽' },
  { value: 'arts-plastiques', label: 'Arts plastiques', icon: '🎨' },
  { value: 'decouverte', label: 'Découverte', icon: '🔍' },
  { value: 'jeu-collectif', label: 'Jeu collectif', icon: '🎲' },
  { value: 'expression', label: 'Expression', icon: '🎭' },
  { value: 'construction', label: 'Construction', icon: '🏗️' },
  { value: 'lecture', label: 'Lecture/Conte', icon: '📚' },
  { value: 'musique', label: 'Musique', icon: '🎵' },
]

// Durées
export const DUREES = [
  { value: '0-15', label: 'Moins de 15 min' },
  { value: '15-30', label: '15-30 min' },
  { value: '30-45', label: '30-45 min' },
  { value: '45-60', label: '45-60 min' },
  { value: '60+', label: 'Plus d\'1h' },
]

// Catégories d'astuces
export const CATEGORIES_ASTUCES = [
  { value: 'gestion-groupe', label: 'Gestion de groupe', icon: '👥' },
  { value: 'transitions', label: 'Transitions', icon: '➡️' },
  { value: 'adaptation', label: 'Adaptation', icon: '🔄' },
  { value: 'conflits', label: 'Gestion des conflits', icon: '🤝' },
  { value: 'observation', label: 'Observation', icon: '👁️' },
  { value: 'explication', label: 'Explication', icon: '💬' },
  { value: 'organisation', label: 'Organisation', icon: '📋' },
  { value: 'inclusion', label: 'Inclusion', icon: '🌈' },
  { value: 'retour-calme', label: 'Retour au calme', icon: '😌' },
]

// Catégories de tutos
export const CATEGORIES_TUTOS = [
  { value: 'planification', label: 'Planification', icon: '📅' },
  { value: 'animation', label: 'Animation', icon: '🎯' },
  { value: 'gestion-groupe', label: 'Gestion de groupe', icon: '👥' },
  { value: 'creativite', label: 'Créativité', icon: '💡' },
  { value: 'methodologie', label: 'Méthodologie', icon: '📖' },
]

// Niveaux de tutos
export const NIVEAUX_TUTOS = [
  { value: 'debutant', label: 'Débutant', color: 'bg-green-100 text-green-800' },
  { value: 'intermediaire', label: 'Intermédiaire', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'avance', label: 'Avancé', color: 'bg-red-100 text-red-800' },
]

// Créneaux planning
export const CRENEAUX_PLANNING = [
  { value: 'matin', label: 'Matin', heures: '9h00 - 12h00', icon: '🌅' },
  { value: 'midi', label: 'Midi', heures: '12h00 - 14h00', icon: '🍽️' },
  { value: 'apres-midi', label: 'Après-midi', heures: '14h00 - 17h00', icon: '☀️' },
  { value: 'soir', label: 'Fin de journée', heures: '17h00 - 18h30', icon: '🌆' },
]

// LocalStorage keys
export const STORAGE_KEYS = {
  FAVORIS: 'animconnect_favoris',
  A_TESTER: 'animconnect_a_tester',
  PLANNING: 'animconnect_planning',
  PROJETS_PERSO: 'animconnect_projets_perso',
}
