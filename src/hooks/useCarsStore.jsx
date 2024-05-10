import { create } from 'zustand'
import developmentCars from '../mocks/cars.json'

const useCarsStore = create((set) => ({
  cars: [],
  loading: true,
  fetchCars: async () => {
    if (process.env.NODE_ENV === 'development') {
      set({ cars: developmentCars, loading: false })
    }
  }
}))

export default useCarsStore
