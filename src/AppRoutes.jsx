import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Cars from './views/Cars'
import About from './views/About'
import Index from './views/Index'
import CarPage from './views/CarPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route path='/' Component={Index} />
      <Route path='cars' Component={Cars} />
      <Route path='cars/:id' Component={CarPage} />
      <Route path='about' Component={About} />
    </Route>
  )
)

export default router
