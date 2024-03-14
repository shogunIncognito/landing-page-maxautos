import Carrusel from '../components/Carrusel'
import Tarjetas from '../components/Tarjetas'
import img from '../assets/maxHero1.webp'
import img2 from '../assets/imagenmaxautos1.webp'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CarsCarrousel from '../components/CarsCarrousel'
import herovideo from '../assets/maxautosvideo720.webm'
import logo from '../assets/maxautosicon.webp'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Index () {
  return (
    <>
      {/* Contenido principal de la pagina inicial '/' */}
      <main className='z-10 w-full overflow-hidden flex flex-col items-center justify-center'>

        <section className='w-full h-[95vh] 2xl:h-[80vh] max-h-[95vh] overflow-hidden bg-black/60 relative flex items-center justify-center text-white'>
          <div className='space-y-2 flex flex-col mx-10 text-center items-center'>
            <h1 className='text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Encuentra el auto de tus sueños
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400'>
              Explora nuestro catalogo de vehiculos tanto nuevos como usados.
            </p>
            <Link to='/cars'>
              <Button className='mt-6 bg-blue-950 hover:bg-blue-900 text-[#f8f9fa]'>Explorar</Button>
            </Link>
          </div>
          <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-screen absolute' src={herovideo} />
        </section>

        <div className='w-full 2xl:w-[1536px] flex flex-col items-center justify-center'>
          <h2 className='mt-16 text-3xl font-bold opacity-60'>Nuestras marcas</h2>
          <section className='w-full h-[300px] text-center pb-5 flex flex-col items-center justify-center'>
            <Carrusel />
          </section>
        </div>

        <CardHero />

        <CarsCarrousel />

        <section className='w-full text-center bg-white p-10'>
          <h2 className='font-bold text-2xl my-5'>SERVICIOS DE MAX AUTOS</h2>
          <Tarjetas />
        </section>

      </main>
      {/* Contenido principal de la pagina inicial '/' */}
    </>
  )
}

const CardHero = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  return (
    <>
      <div ref={ref} className='flex md:h-[80vh] md:flex-row flex-col w-full md:items-center items-end'>
        <div
          className='flex flex-col items-center justify-center md:w-1/2 bg-white p-6 text-[#212529] w-full h-[50vh] gap-5 md:gap-0'
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
          }}
        >
          {/* <h1 className='md:text-5xl text-3xl font-bold'>Max Autos</h1> */}
          <img className='w-[100px] h-auto xl:w-[150px]' src={logo} alt='MaxAutos' />
          <p className='mt-4 text-lg md:text-xl xl:text-xl 2xl:text-2xl bold opacity-75 text-wrap leading-relaxed max-w-2xl'>
            Empresa 100% Llanera dedicada a la compra y venta de vehículos usados a nivel Nacional con experiencia en el
            mercado de más de 10 años
          </p>
        </div>
        <div className='w-[90%] h-[90%] md:w-1/2 flex justify-end items-end md:items-center content-center bg-blue-950 rounded-l-full py-4 md:py-0'>
          <img
            alt='Vista aérea de Max Autos'
            className='h-[90%] w-[90%] rounded-l-full object-cover'
            height='1080'
            src={img}
          />
        </div>
      </div>
      <div className='flex md:h-[80vh] md:flex-row flex-col-reverse w-full mb-40'>
        <div className='w-[90%] md:w-1/2 flex justify-start items-center bg-blue-950 rounded-r-full py-4 md:py-0'>
          <img
            alt='Vista aérea de Max Autos'
            className='h-[90%] w-[90%] object-cover rounded-r-full'
            src={img2}
          />
        </div>
        <div
          ref={ref2}
          style={{
            transform: isInView2 ? 'none' : 'translateX(200px)',
            opacity: isInView2 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
          }}
          className='flex flex-col items-center justify-center md:w-1/2 bg-white p-14 text-[#212529]'
        >
          <h1 className='md:text-5xl text-3xl font-bold'>Max Autos</h1>
          <p className='mt-4 text-lg md:text-xl xl:text-xl 2xl:text-2xl  bold opacity-75 text-wrap leading-relaxed max-w-2xl'>
            Nos dedicamos a generar la mejor experiencia en la compra y venta de vehículos usados.
            Nuestra prioridad es establecer acuerdos basados en confianza, calidad, cumplimiento y
            responsabilidad, asegurando la satisfacción total de nuestros clientes.
          </p>
          <Link to='/about'>
            <Button className='mt-6 hover:bg-blue-900 text-[#f8f9fa] bg-blue-950'>Conoce más</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
