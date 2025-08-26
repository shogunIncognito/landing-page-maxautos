import axios from 'axios'
import { useEffect, useState } from 'react'

const API_CARS_URL = 'https://maxapi.onrender.com/api/cars/'

export default function useFetchCars(query = '') {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getCars = async (quer) => {
    try {
      setLoading(true)
      const data = await axios.get(API_CARS_URL + quer)
      setCars(data.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars(query)
  }, [])

  return { cars, getCars, loading, error }
}
