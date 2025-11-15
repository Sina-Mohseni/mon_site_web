import { isDureeInRange, projetMatchSearch } from '../utils/helpers'

/**
 * Service de filtrage des projets
 */

export const filterProjets = (projets, filters) => {
  return projets.filter(projet => {
    // Filtre par niveaux
    if (filters.niveaux && filters.niveaux.length > 0) {
      const hasMatchingNiveau = filters.niveaux.some(niveau =>
        projet.niveaux.includes(niveau)
      )
      if (!hasMatchingNiveau) return false
    }

    // Filtre par lieu
    if (filters.lieu && filters.lieu !== 'tous') {
      if (projet.lieu !== filters.lieu && projet.lieu !== 'interieur-exterieur') {
        return false
      }
    }

    // Filtre par durée
    if (filters.duree && filters.duree !== 'tous') {
      if (!isDureeInRange(projet.duree, filters.duree)) {
        return false
      }
    }

    // Filtre par badges
    if (filters.badges && filters.badges.length > 0) {
      const hasMatchingBadge = filters.badges.some(badge =>
        projet.badges.includes(badge)
      )
      if (!hasMatchingBadge) return false
    }

    // Filtre par catégorie
    if (filters.categorie && filters.categorie !== 'tous') {
      if (projet.categorie !== filters.categorie) {
        return false
      }
    }

    // Filtre par recherche textuelle
    if (filters.search) {
      if (!projetMatchSearch(projet, filters.search)) {
        return false
      }
    }

    // Filtre coup de cœur
    if (filters.coupDeCoeur) {
      if (!projet.coupDeCoeur) return false
    }

    // Filtre spécial pluie
    if (filters.specialPluie) {
      if (!projet.specialPluie) return false
    }

    return true
  })
}

/**
 * Tri des projets
 */
export const sortProjets = (projets, sortBy) => {
  const sorted = [...projets]

  switch (sortBy) {
    case 'titre-asc':
      return sorted.sort((a, b) => a.titre.localeCompare(b.titre))

    case 'titre-desc':
      return sorted.sort((a, b) => b.titre.localeCompare(a.titre))

    case 'duree-asc':
      return sorted.sort((a, b) => a.duree - b.duree)

    case 'duree-desc':
      return sorted.sort((a, b) => b.duree - a.duree)

    case 'recent':
      // Tri par ID (les plus récents ont des IDs plus grands)
      return sorted.sort((a, b) => b.id.localeCompare(a.id))

    default:
      return sorted
  }
}

/**
 * Suggestions de projets pour le mode urgence
 */
export const suggestProjetsUrgence = (projets, criteres) => {
  const { niveaux, duree, lieu, materiel } = criteres

  // Filtrer les projets selon les critères
  let suggestions = projets.filter(projet => {
    // Vérifier les niveaux
    const niveauMatch = niveaux.some(niveau => projet.niveaux.includes(niveau))
    if (!niveauMatch) return false

    // Vérifier la durée
    if (duree && !isDureeInRange(projet.duree, duree)) {
      return false
    }

    // Vérifier le lieu
    if (lieu && lieu !== 'tous') {
      if (projet.lieu !== lieu && projet.lieu !== 'interieur-exterieur') {
        return false
      }
    }

    // Vérifier le matériel
    if (materiel === 'aucun') {
      if (!projet.badges.includes('sans-materiel')) {
        return false
      }
    } else if (materiel === 'peu') {
      if (!projet.badges.includes('sans-materiel') && !projet.badges.includes('peu-materiel')) {
        return false
      }
    }

    return true
  })

  // Trier par pertinence (coup de cœur en premier)
  suggestions = suggestions.sort((a, b) => {
    if (a.coupDeCoeur && !b.coupDeCoeur) return -1
    if (!a.coupDeCoeur && b.coupDeCoeur) return 1
    return 0
  })

  // Retourner max 3 suggestions
  return suggestions.slice(0, 3)
}

/**
 * Obtenir les projets associés (même catégorie, même niveaux)
 */
export const getProjetsAssocies = (projet, tousProjets, limit = 3) => {
  return tousProjets
    .filter(p => {
      // Exclure le projet actuel
      if (p.id === projet.id) return false

      // Même catégorie OU au moins un niveau en commun
      const memeCategorie = p.categorie === projet.categorie
      const niveauCommun = p.niveaux.some(n => projet.niveaux.includes(n))

      return memeCategorie || niveauCommun
    })
    .slice(0, limit)
}
