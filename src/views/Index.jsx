import Carrusel from '../components/Carrusel'
import Tarjetas from '../components/Tarjetas'
import img from '../assets/maxHero1.jpg'
import maxautoslogo from '../assets/maxautoslogoblanco.png'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CarsCarrousel from '../components/CarsCarrousel'
import herovideo from '../assets/maxautosvideo720.webm'

export default function Index () {
  return (
    <>
      {/* Contenido principal de la pagina inicial '/' */}
      <main className='z-10 w-full flex flex-col items-center justify-center'>

        <section className='w-full h-[95vh] 2xl:h-[80vh] max-h-[95vh] overflow-hidden bg-black/60 relative flex items-center justify-center text-white'>
          <div className='space-y-2 flex flex-col mx-10 text-center items-center'>
            {/* <img src={maxautoslogo} alt='logo' className='w-40 mb-3 h-full object-contain' /> */}
            <h1 className='text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Encuentra el auto de tus sueños
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400'>
              Explora nuestro catalogo de vehiculos tanto nuevos como usados.
            </p>
            <Link to='/cars'>
              <Button className='mt-6 bg-[#212529] hover:bg-[#666666] text-[#f8f9fa]'>Explorar</Button>
            </Link>
          </div>
          <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-screen absolute' src={herovideo} />
        </section>

        <div className='w-full 2xl:w-[1536px] flex flex-col items-center justify-center'>
          <section className='w-full h-[300px] text-center pb-5 flex flex-col items-center justify-center'>
            <h1 className='text-xl font-extrabold my-8 sm:m-5 p-3'>NUESTRAS MARCAS</h1>
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

const CardHero = () => (
  <div className='flex md:h-[610px] h-[680px] md:flex-row flex-col w-full'>
    <div className='flex flex-col items-center justify-center md:w-1/2 bg-[#f8f9fa] p-14 text-[#212529]'>
      <h1 className='md:text-5xl text-3xl font-bold'>Max Autos</h1>
      <p className='mt-4 text-xl bold opacity-75 text-justify leading-relaxed max-w-2xl'>
        Empresa 100% Llanera dedicada a la compra y venta de vehículos usados a nivel Nacional con experiencia en el
        mercado de más de 10 años
      </p>
      <Link to='/about'>
        <Button className='mt-6 bg-[#212529] hover:bg-[#666666] text-[#f8f9fa]'>Conoce más</Button>
      </Link>
    </div>
    <div className='md:w-1/2'>
      <img
        alt='Vista aérea de Max Autos'
        className='h-full w-full object-cover'
        height='1080'
        src={img}
        style={{
          aspectRatio: '810/1080',
          objectFit: 'cover'
        }}
        width='810'
      />
    </div>
  </div>
)
