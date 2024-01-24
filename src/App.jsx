import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NavBarResponsive from './components/NavBarResponsive'
import Cars from './views/Cars'
import About from './views/About'
import Index from './views/Index'
import CarPage from './views/CarPage'
import { AnimatePresence } from 'framer-motion'
import AnimatedMotion from './views/AnimatedMotion'

export default function App () {
  const location = useLocation()
  return (
    <>
      <NavBar />
      <NavBarResponsive />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<AnimatedMotion><Index /></AnimatedMotion>} />
          <Route path='/cars' element={<AnimatedMotion><Cars /></AnimatedMotion>} />
          <Route path='/cars/:id' element={<AnimatedMotion><CarPage /></AnimatedMotion>} />
          <Route path='/about' element={<AnimatedMotion><About /></AnimatedMotion>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
