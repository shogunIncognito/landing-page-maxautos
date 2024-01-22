import { GrUserAdmin } from 'react-icons/gr'
import iconresponsive from '../assets/maxautosicon.png'
import { AiFillHome } from 'react-icons/ai'
import { RiTeamFill } from 'react-icons/ri'
import { FaCarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NavBar () {
  return (
    <div className='w-full h-24 bg-transparent max-lg:hidden lg:flex justify-center absolute'>
      <header className='bg-slate-50 max-[1920px]:h-[70px] min-[2560px]:h-24 shadow-xl flex-col md:flex-row top-0 fixed duration-300 ease-in-out transition-all z-50 p-4 lg:flex w-[97%] rounded-b-lg items-center'>
        <Link to='/' className='md:absolute'>
          <img className='w-[70px] h-14' src={iconresponsive} alt='logo' />
        </Link>
        <nav className='m-auto w-full flex justify-center items-center'>
          <ul className='flex justify-center items-center'>
            <li className='hover:scale-110 transition-all duration-75 '>
              <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to='/'>
                <AiFillHome size={23} />
                Inicio
              </Link>
            </li>
            <li className='hover:scale-110 transition-all duration-75'>
              <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to='/cars'>
                <FaCarAlt size={23} />
                Nuestros Autos
              </Link>
            </li>
            <li className='hover:scale-110 transition-all duration-75'>
              <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to='/about'>
                <RiTeamFill size={23} />
                Nosotros
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>

  )
}
