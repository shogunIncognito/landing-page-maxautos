import { getCars } from '../services/api'
import { create } from 'zustand'
import developmentCars from '../mocks/cars.json'

const useCarsStore = create((set) => ({
  cars: [],
  loading: true,
  fetchCars: async () => {
    if (process.env.NODE_ENV === 'development') {
      set({ cars: developmentCars, loading: false })
      return
    }

    const cars = await getCars()
    set({ cars, loading: false })
  }
}))

export default useCarsStore
