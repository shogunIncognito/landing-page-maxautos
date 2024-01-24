import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/*' Component={App} />
  )
)

export default router
