import { RiMenu4Line, RiTeamFill } from 'react-icons/ri'
import { ImCancelCircle } from 'react-icons/im'
import iconresponsive from '../assets/maxautosicon.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaCarAlt, FaWhatsapp } from 'react-icons/fa'
import maxautoswhite from '../assets/maxautoslogoblanco.webp'
import { InstagramIcon } from './Footer'

export default function NavBarResponsive () {
  const [boton, setBoton] = useState(false)

  return (
    <>
      <div className='w-full h-16 bg-transparent max-lg:flex
       lg:hidden justify-center absolute'
      >
        <header className='w-[97%] h-16 bg-blue-950 flex items-center justify-between fixed z-40 px-2 shadow-lg rounded-b-xl'>
          <button onClick={() => setBoton(!boton)} className='text-white'>
            <RiMenu4Line size={35} />
          </button>
          <Link to='/'>
            <img className='w-16 h-auto md:w-16 md:h-12' src={maxautoswhite} alt='maxautos' />
          </Link>
        </header>
      </div>

      <aside
        style={{
          transform: `translateX(-${boton ? 0 : 200}%)`,
          zIndex: '200'
        }}
        className='w-[75%] h-screen bg-slate-100 transition-transform duration-300 top-0 fixed rounded-b-md flex flex-col z-[106] shadow-xl p-4 lg:hidden'
      >
        <div className='w-full h-32 flex flex-col justify-center items-center top-0 p-2'>
          <img className='w-28 h-auto my-3' src={iconresponsive} alt='logo' />
          <hr className='w-full text-black' />
        </div>
        <div className='w-full flex-1 gap-2 mt-5 flex flex-col items-start'>
          <div onClick={() => setBoton(false)} className='flex w-[80%] items-center justify-center p-2 hover:bg-blue-300 rounded-md'>
            <Link className='flex w-full h-full my-2 items-center' to='/'>
              <AiFillHome size={24} />
              <p className='flex items-center ml-3'>Inicio</p>
            </Link>
          </div>
          <div onClick={() => setBoton(false)} className='flex w-[80%] items-center justify-center p-2 hover:bg-blue-300 rounded-md'>
            <Link className='flex w-full h-full my-2 items-center' to='/cars'>
              <FaCarAlt size={24} />
              <p className='flex items-center ml-3'>Inventario</p>
            </Link>
          </div>
          <div onClick={() => setBoton(false)} className='flex w-[80%] items-center justify-center p-2 hover:bg-blue-300 rounded-md'>
            <Link className='flex w-full h-full my-2 items-center' to='/about'>
              <RiTeamFill size={24} />
              <p className='flex items-center ml-3'>Nosotros</p>
            </Link>
          </div>
        </div>

        <div onClick={() => setBoton(false)} className='w-full h-20 flex-col flex justify-center items-center bottom-0 p-2'>
          {/* redes sociales */}
          <div className='flex gap-3 mb-5'>
            <a href='https://wa.link/p4wx5x' target='_blank' rel='noreferrer'>
              <FaWhatsapp size={24} />
            </a>
            <a href='https://www.instagram.com/maxautosusados' target='_blank' rel='noreferrer'>
              <InstagramIcon size={24} />
            </a>
          </div>

          <button onClick={() => setBoton(!boton)}>
            <ImCancelCircle size={35} />
          </button>
        </div>
      </aside>

      {boton && (
        <div className='fixed md:hidden h-full w-full bg-black/60 z-50' onClick={() => setBoton(false)} />
      )}
    </>
  )
}
