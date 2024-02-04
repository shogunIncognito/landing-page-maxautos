import { Link, useLocation } from 'react-router-dom'
import maxautoswhite from '../assets/maxautosicon.png'
import { appRoutes } from '../helpers/data'

export default function NavBar () {
  const path = useLocation().pathname
  return (
    <div className='w-full h-24 bg-transparent max-lg:hidden lg:flex justify-center absolute'>
      <header className='bg-blue-950 max-[1920px]:h-[75px] min-[2560px]:h-24 shadow-xl lg:flex-col md:flex-row top-0 fixed duration-300 ease-in-out transition-all z-[60] p-4 lg:flex w-[95%] rounded-b-lg items-center hidden'>
        <nav className='m-auto w-full h-full flex justify-between items-center content-center'>
          <Link to='/' className=''>
            <img className='w-[70px] h-12 invert' src={maxautoswhite} alt='logo' />
          </Link>
          <ul className='flex justify-center items-center gap-2'>

            {appRoutes.map((route, index) => (
              <li key={index} className={`link-animated ${path === route.path ? 'link-animated-selected' : ''} hover:bg-slate-600/20 rounded-lg transition-all duration-300 ease-in-out text-white`}>
                <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent' to={route.path}>
                  <route.icon size={24} />
                  {route.name}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
      </header>
    </div>
  )
}
