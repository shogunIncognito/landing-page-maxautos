import { getBrands, getCars } from '@/services/api'
import { create } from 'zustand'

const useCarsStore = create((set) => ({
  cars: [],
  brands: [],
  loading: true,
  addCar: (car) => set((state) => ({ cars: [...state.cars, car] })),
  deleteCar: (id) => set((state) => ({ cars: state.cars.filter((car) => car.id !== id) })),
  reFetch: () => {
    Promise.all([getCars(), getBrands()])
      .then(([cars, brands]) => set({ cars, brands }))
      .catch((err) => console.log(err))
      .finally(() => set({ loading: false }))
  }
}))

export default useCarsStore
