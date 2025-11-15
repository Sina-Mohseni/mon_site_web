import { useState, useEffect, useCallback } from 'react'
import {
  getPlanning,
  savePlanning as savePlanningLS,
  addToPlanning as addToPlanningLS,
  removeFromPlanning as removeFromPlanningLS,
  clearPlanning as clearPlanningLS
} from '../services/localStorage'

/**
 * Hook personnalisé pour gérer le planning
 */
export const usePlanning = () => {
  const [planning, setPlanning] = useState({
    matin: [],
    midi: [],
    'apres-midi': [],
    soir: []
  })

  useEffect(() => {
    setPlanning(getPlanning())
  }, [])

  const savePlanning = useCallback((nouveauPlanning) => {
    if (savePlanningLS(nouveauPlanning)) {
      setPlanning(nouveauPlanning)
      return true
    }
    return false
  }, [])

  const addToPlanning = useCallback((creneau, projetId) => {
    if (addToPlanningLS(creneau, projetId)) {
      setPlanning(getPlanning())
      return true
    }
    return false
  }, [])

  const removeFromPlanning = useCallback((creneau, projetId) => {
    if (removeFromPlanningLS(creneau, projetId)) {
      setPlanning(getPlanning())
      return true
    }
    return false
  }, [])

  const clearPlanning = useCallback(() => {
    if (clearPlanningLS()) {
      setPlanning({
        matin: [],
        midi: [],
        'apres-midi': [],
        soir: []
      })
      return true
    }
    return false
  }, [])

  const getTotalDuree = useCallback((creneau, projetsData) => {
    if (!planning[creneau] || !projetsData) return 0

    return planning[creneau].reduce((total, projetId) => {
      const projet = projetsData.find(p => p.id === projetId)
      return total + (projet ? projet.duree : 0)
    }, 0)
  }, [planning])

  const isProjetInPlanning = useCallback((projetId) => {
    return Object.values(planning).some(creneau =>
      creneau.includes(projetId)
    )
  }, [planning])

  return {
    planning,
    savePlanning,
    addToPlanning,
    removeFromPlanning,
    clearPlanning,
    getTotalDuree,
    isProjetInPlanning
  }
}

export default usePlanning
