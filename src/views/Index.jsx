import Carrusel from '../components/Carrusel'
import Tarjetas from '../components/Tarjetas'
import img from '../assets/maxHero1.jpg'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Index() {
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
        </div>

        <CardHero />

        <section className='w-full text-center bg-white p-10 '>
          <h2 className='font-mono font-bold text-xl'>SERVICIOS DE MAX AUTOS</h2>
          <Tarjetas />
        </section>

      </main>

      {/* Contenido principal de la pagina inicial '/' */}
    </>
  )
}

const CardHero = () => (
  <div className="flex h-[510px] w-full">
    <div className="flex flex-col items-center justify-center w-1/2 bg-[#f8f9fa] p-8 text-[#212529]">
      <h1 className="text-5xl font-bold">Max Autos</h1>
      <p className="mt-4 text-xl bold opacity-75 text-justify leading-relaxed max-w-2xl">
        Empresa 100% Llanera dedicada a la compra y venta de vehículos usados a nivel Nacional con experiencia en el
        mercado de más de 10 años
      </p>
      <Button className="mt-6 bg-[#212529] hover:bg-[#666666] text-[#f8f9fa]">Conoce más</Button>
    </div>
    <div className="w-1/2">
      <img
        alt="Vista aérea de Max Autos"
        className="h-full w-full object-cover"
        height="1080"
        src={img}
        style={{
          aspectRatio: "810/1080",
          objectFit: "cover",
        }}
        width="810"
      />
    </div>
  </div>
)