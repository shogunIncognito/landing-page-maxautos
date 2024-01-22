import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavBarResponsive from './components/NavBarResponsive'

export default function App() {
  return (
    <>
      <NavBar />
      <NavBarResponsive />
      <Outlet />
      <Footer/>
    </>
  )
}