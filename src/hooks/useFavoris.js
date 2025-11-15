import { useState, useEffect, useCallback } from 'react'
import {
  getFavoris,
  addFavori as addFavoriLS,
  removeFavori as removeFavoriLS,
  isFavori as isFavoriLS,
  getATester,
  addATester as addATesterLS,
  removeATester as removeATesterLS,
  isATester as isATesterLS
} from '../services/localStorage'

/**
 * Hook personnalisé pour gérer les favoris
 */
export const useFavoris = () => {
  const [favoris, setFavoris] = useState([])

  useEffect(() => {
    setFavoris(getFavoris())
  }, [])

  const addFavori = useCallback((projetId) => {
    if (addFavoriLS(projetId)) {
      setFavoris(getFavoris())
      return true
    }
    return false
  }, [])

  const removeFavori = useCallback((projetId) => {
    if (removeFavoriLS(projetId)) {
      setFavoris(getFavoris())
      return true
    }
    return false
  }, [])

  const toggleFavori = useCallback((projetId) => {
    if (isFavoriLS(projetId)) {
      return removeFavori(projetId)
    } else {
      return addFavori(projetId)
    }
  }, [addFavori, removeFavori])

  const isFavori = useCallback((projetId) => {
    return favoris.includes(projetId)
  }, [favoris])

  return {
    favoris,
    addFavori,
    removeFavori,
    toggleFavori,
    isFavori
  }
}

/**
 * Hook personnalisé pour gérer la liste "à tester"
 */
export const useATester = () => {
  const [aTester, setATester] = useState([])

  useEffect(() => {
    setATester(getATester())
  }, [])

  const addATester = useCallback((projetId) => {
    if (addATesterLS(projetId)) {
      setATester(getATester())
      return true
    }
    return false
  }, [])

  const removeATester = useCallback((projetId) => {
    if (removeATesterLS(projetId)) {
      setATester(getATester())
      return true
    }
    return false
  }, [])

  const toggleATester = useCallback((projetId) => {
    if (isATesterLS(projetId)) {
      return removeATester(projetId)
    } else {
      return addATester(projetId)
    }
  }, [addATester, removeATester])

  const isATester = useCallback((projetId) => {
    return aTester.includes(projetId)
  }, [aTester])

  return {
    aTester,
    addATester,
    removeATester,
    toggleATester,
    isATester
  }
}
