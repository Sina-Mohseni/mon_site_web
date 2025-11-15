import { STORAGE_KEYS } from '../utils/constants'

/**
 * Service de gestion du localStorage
 */

// === FAVORIS ===

export const getFavoris = () => {
  try {
    const favoris = localStorage.getItem(STORAGE_KEYS.FAVORIS)
    return favoris ? JSON.parse(favoris) : []
  } catch (error) {
    console.error('Erreur lors de la récupération des favoris:', error)
    return []
  }
}

export const addFavori = (projetId) => {
  try {
    const favoris = getFavoris()
    if (!favoris.includes(projetId)) {
      favoris.push(projetId)
      localStorage.setItem(STORAGE_KEYS.FAVORIS, JSON.stringify(favoris))
      return true
    }
    return false
  } catch (error) {
    console.error('Erreur lors de l\'ajout aux favoris:', error)
    return false
  }
}

export const removeFavori = (projetId) => {
  try {
    const favoris = getFavoris()
    const nouveauxFavoris = favoris.filter(id => id !== projetId)
    localStorage.setItem(STORAGE_KEYS.FAVORIS, JSON.stringify(nouveauxFavoris))
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression du favori:', error)
    return false
  }
}

export const isFavori = (projetId) => {
  const favoris = getFavoris()
  return favoris.includes(projetId)
}

// === À TESTER ===

export const getATester = () => {
  try {
    const aTester = localStorage.getItem(STORAGE_KEYS.A_TESTER)
    return aTester ? JSON.parse(aTester) : []
  } catch (error) {
    console.error('Erreur lors de la récupération de la liste à tester:', error)
    return []
  }
}

export const addATester = (projetId) => {
  try {
    const aTester = getATester()
    if (!aTester.includes(projetId)) {
      aTester.push(projetId)
      localStorage.setItem(STORAGE_KEYS.A_TESTER, JSON.stringify(aTester))
      return true
    }
    return false
  } catch (error) {
    console.error('Erreur lors de l\'ajout à la liste à tester:', error)
    return false
  }
}

export const removeATester = (projetId) => {
  try {
    const aTester = getATester()
    const nouveauxATester = aTester.filter(id => id !== projetId)
    localStorage.setItem(STORAGE_KEYS.A_TESTER, JSON.stringify(nouveauxATester))
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression de la liste à tester:', error)
    return false
  }
}

export const isATester = (projetId) => {
  const aTester = getATester()
  return aTester.includes(projetId)
}

// === PLANNING ===

export const getPlanning = () => {
  try {
    const planning = localStorage.getItem(STORAGE_KEYS.PLANNING)
    return planning ? JSON.parse(planning) : {
      matin: [],
      midi: [],
      'apres-midi': [],
      soir: []
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du planning:', error)
    return {
      matin: [],
      midi: [],
      'apres-midi': [],
      soir: []
    }
  }
}

export const savePlanning = (planning) => {
  try {
    localStorage.setItem(STORAGE_KEYS.PLANNING, JSON.stringify(planning))
    return true
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du planning:', error)
    return false
  }
}

export const addToPlanning = (creneau, projetId) => {
  try {
    const planning = getPlanning()
    if (!planning[creneau].includes(projetId)) {
      planning[creneau].push(projetId)
      savePlanning(planning)
      return true
    }
    return false
  } catch (error) {
    console.error('Erreur lors de l\'ajout au planning:', error)
    return false
  }
}

export const removeFromPlanning = (creneau, projetId) => {
  try {
    const planning = getPlanning()
    planning[creneau] = planning[creneau].filter(id => id !== projetId)
    savePlanning(planning)
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression du planning:', error)
    return false
  }
}

export const clearPlanning = () => {
  try {
    localStorage.setItem(STORAGE_KEYS.PLANNING, JSON.stringify({
      matin: [],
      midi: [],
      'apres-midi': [],
      soir: []
    }))
    return true
  } catch (error) {
    console.error('Erreur lors du nettoyage du planning:', error)
    return false
  }
}

// === PROJETS PERSONNELS ===

export const getProjetsPerso = () => {
  try {
    const projets = localStorage.getItem(STORAGE_KEYS.PROJETS_PERSO)
    return projets ? JSON.parse(projets) : []
  } catch (error) {
    console.error('Erreur lors de la récupération des projets personnels:', error)
    return []
  }
}

export const saveProjetPerso = (projet) => {
  try {
    const projets = getProjetsPerso()
    projets.push(projet)
    localStorage.setItem(STORAGE_KEYS.PROJETS_PERSO, JSON.stringify(projets))
    return true
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du projet personnel:', error)
    return false
  }
}

export const deleteProjetPerso = (projetId) => {
  try {
    const projets = getProjetsPerso()
    const nouveauxProjets = projets.filter(p => p.id !== projetId)
    localStorage.setItem(STORAGE_KEYS.PROJETS_PERSO, JSON.stringify(nouveauxProjets))
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression du projet personnel:', error)
    return false
  }
}

export const updateProjetPerso = (projetId, projetMisAJour) => {
  try {
    const projets = getProjetsPerso()
    const index = projets.findIndex(p => p.id === projetId)
    if (index !== -1) {
      projets[index] = projetMisAJour
      localStorage.setItem(STORAGE_KEYS.PROJETS_PERSO, JSON.stringify(projets))
      return true
    }
    return false
  } catch (error) {
    console.error('Erreur lors de la mise à jour du projet personnel:', error)
    return false
  }
}

// === UTILITAIRES ===

export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
    return true
  } catch (error) {
    console.error('Erreur lors du nettoyage des données:', error)
    return false
  }
}

export const exportData = () => {
  try {
    const data = {}
    Object.entries(STORAGE_KEYS).forEach(([key, value]) => {
      const item = localStorage.getItem(value)
      if (item) {
        data[key] = JSON.parse(item)
      }
    })
    return data
  } catch (error) {
    console.error('Erreur lors de l\'export des données:', error)
    return null
  }
}

export const importData = (data) => {
  try {
    Object.entries(data).forEach(([key, value]) => {
      if (STORAGE_KEYS[key]) {
        localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(value))
      }
    })
    return true
  } catch (error) {
    console.error('Erreur lors de l\'import des données:', error)
    return false
  }
}
