import Carrusel from '../components/Carrusel'
import Tarjetas from '../components/Tarjetas'
import img from '../assets/maxHero1.jpg'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Index () {
  return (
    <>
      {/* Contenido principal de la pagina inicial '/' */}
      <main className='z-10 w-full flex flex-col items-center justify-center'>

        <section className='w-full h-[95vh] 2xl:h-[80vh] max-h-[95vh] overflow-hidden bg-black/60 relative flex items-center justify-center text-white'>
          <div className='w-full h-72 flex flex-col items-center justify-center gap-3 mb-20 p-10 rounded'>
            <h1 className='text-5xl mb-3 min-[2560px]:text-4xl font-bold text-center'>Max <span className='text-blue-500'>Autos</span> </h1>
            <p className='text-center text-2xl min-[2560px]:text-4xl italic bg-gradient-to-tr from-blue-400 p-1 rounded-md'>Usados que dan confianza.</p>
            <Link to='/cars' className='bg-transparent text-white px-6 py-3 rounded transition-colors border-2 border-white hover:bg-white hover:text-black mt-5'>Ver recientes</Link>
          </div>
          <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-screen absolute' src='/videomaxapptest.mp4' />
        </section>
        <div className='w-full 2xl:w-[1536px] flex flex-col items-center justify-center'>
          <section className='w-full h-[300px] text-center pb-5 flex flex-col items-center justify-center'>
            <h1 className='font-mono text-xl font-extrabold my-8 sm:m-5 p-3'>NUESTRAS MARCAS</h1>
            <Carrusel />
          </section>
          <section className='w-full h-4/6 flex flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-[50%] flex items-center justify-center bg-gradient-to-l from-white to-blue-400/80 rounded-lg overflow-hidden'>
              <div className='flex flex-col text-center justify-center items-center p-8'>
                <h2 className='text-5xl font-bold text-center m-5'>Max <span className='text-blue-500'>Autos</span> </h2>
                <p className='m-5 text-xl'>
                  Empresa <span className='text-blue-700 font-bold'>100%</span> Llanera dedicada a la compra y venta de vehículos usados a nivel Nacional con experiencia en el mercado de más de <span className='text-blue-500 font-bold'>10 años</span>
                </p>
                <div className=''>
                  <Link className='grid transition-colors group place-content-center border-2 border-blue-500 border-solid px-14 py-2 text-black w-[25%] m-5 rounded hover:bg-blue-400 hover:text-white' to='/about'>
                    <p><AiOutlineEye className='text-blue-500 transition-colors group-hover:text-white' size={24} /></p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[50%] h-full bg-blue-500'>
              <img className='w-full h-full object-cover select-none pointer-events-none' src={img} alt='maxautos' />
            </div>
          </section>

          <section className='w-full text-center bg-white p-10 '>
            <h2 className='font-mono font-bold text-xl'>SERVICIOS DE MAX AUTOS</h2>
            <Tarjetas />
          </section>
        </div>

      </main>

      {/* Contenido principal de la pagina inicial '/' */}
    </>
  )
}
