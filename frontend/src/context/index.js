import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext,
} from 'react'
import { useLocaleStorage } from '../hook'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useLocaleStorage('history', [])

  const [loading, setLoading] = useState(true)
  const [passengers, setPassengers] = useState([])

  const updateHistory = (newItem) => {
    const uniqueArray = history.filter((item) => {
      return item.id !== newItem.id
    })

    if (history.length < 4) {
      setHistory([...uniqueArray, newItem])
    } else {
      const duplicated = history.find((item) => {
        return item.id === newItem.id
      })
      if (duplicated) {
        return
      }
      uniqueArray.shift()

      setHistory([...uniqueArray, newItem])
    }
  }

  const fetchPassengers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(` http://localhost:1337/passenger`)
      const data = await response.json()
      setPassengers(data.items)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPassengers()
  }, [])
  const ctxValue = {
    passengers,
    loading,
    updateHistory,
    history,
    setPassengers,
    setLoading,
  }
  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
