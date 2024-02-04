import image1 from '../assets/imagenmaxautos1.jpeg'
import { img3 } from '../assets/personal/images'
import PhotosGallery from '../components/PhotosGallery'

export default function About () {
  return (
    <>
      <section className='flex flex-col gap-16 px-4 pt-32 py-8 md:px-6 lg:gap-16'>
        <section className='container mx-auto'>
          <div className='space-y-4 text-center'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>Sobre nosotros</h1>
            <hr className='text-blue-800' />
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Aprende mas sobre nuestra concesionaria, nuestro equipo y nuestro compromiso con nuestros clientes.
            </p>
          </div>
        </section>
        <section className='container mx-auto grid gap-8 lg:grid-cols-2'>
          <div className='flex flex-col justify-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Nuestra historia</h2>
            <p className='text-gray-500 text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
              que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
              para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
              vez más clientes felices.
            </p>
          </div>
          <img
            alt='Dealership Image'
            className='aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
            height='310'
            src={image1}
            width='550'
          />
        </section>

        <section id='weare' className='w-full flex-col max-sm:py-5 max-sm:p-0 pt-8 min-[2560px]:p-36 h-auto flex items-center justify-center'>
          <PhotosGallery />
        </section>

        <section className='container mx-auto'>
          <div className='flex flex-col justify-center space-y-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Nuestra misión y valores</h2>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Generar en cada uno de
              nuestros clientes la mejor experiencia de compra y venta de vehículos usados, pactados en un acuerdo
              de confianza, calidad, cumplimiento y responsabilidad
            </p>
          </div>
        </section>
        <section className='container mx-auto grid gap-8 lg:grid-cols-2'>
          <img
            alt='Customer Service Image'
            className='aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
            height='310'
            src={img3}
            width='550'
          />
          <div className='flex flex-col justify-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Servicio al cliente y soporte
            </h2>
            <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-justify'>
              Estamos comprometidos a brindar un servicio al cliente excepcional y garantizar su satisfacción. Nuestro
              equipo siempre está disponible para ayudarlo con cualquier pregunta o inquietud.
            </p>
          </div>
        </section>
      </section>

      <section className='flex lg:flex-row mt-4 p-2 flex-col'>
        <div className='w-full lg:w-[30%] flex flex-col justify-center items-center bg-blue-400/70 font-bold rounded p-3'>
          <div className='bg-white shadow-lg p-4 rounded-lg w-[95%]'>
            <h2 className='text-xl font-semibold mb-3'>Horarios de Atención</h2>
            <div className='grid grid-cols-2 gap-2'>
              <div className='text-gray-600'>Lunes:</div>
              <div className='text-gray-800'>8:00 AM - 6:00 PM</div>
              <div className='text-gray-600'>Martes:</div>
              <div className='text-gray-800'>8:00 AM - 6:00 PM</div>
              <div className='text-gray-600'>Miércoles:</div>
              <div className='text-gray-800'>8:00 AM - 6:00 PM</div>
              <div className='text-gray-600'>Jueves:</div>
              <div className='text-gray-800'>8:00 AM - 6:00 PM</div>
              <div className='text-gray-600'>Viernes:</div>
              <div className='text-gray-800'>8:00 AM - 6:00 PM</div>
              <div className='text-gray-600'>Sábado:</div>
              <div className='text-gray-800'>8:00 AM - 2:00 PM</div>
              <div className='text-gray-600'>Domingo:</div>
              <div className='text-gray-800'>Cerrado</div>
            </div>
          </div>
        </div>

        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.4354539650095!2d-73.62022801996487!3d4.124806286974369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2fc37b59d1df%3A0xebf7a3199e0db914!2sCompra%20Y%20Venta%20De%20Carros%20Max-Autos!5e0!3m2!1ses-419!2sco!4v1698363184868!5m2!1ses-419!2sco' id='maps' className='flex-1 border-0 h-[300px] lg:h-auto w-full lg:w-[70%]' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
      </section>
    </>
  )
}
