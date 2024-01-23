export default function Cards () {
  return (
    <div className='flex w-full h-auto md:h-[640px] rounded bg-gray-100 p-10'>
      <div className='flex flex-col md:flex-row gap-2 w-full'>

        <div className='flex flex-col gap-2 md:w-1/2'>

          <div className='relative group h-1/2'>
            <img
              alt='Venta de autos de calidad'
              className='w-full h-full object-cover rounded-lg'
              src='https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/ikusi_ikusi_image_283.jpeg'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center space-y-4 rounded-lg'>
              <CarIcon className='text-white w-12 h-12' />
              <div className='text-center'>
                <p className='text-white text-lg font-semibold'>VENTA DE AUTOS DE CALIDAD</p>
              </div>
            </div>
          </div>
          <div className='relative group h-1/2'>
            <img
              alt='Compramos tu auto al mejor precio'
              className='w-full h-full object-cover rounded-lg'
              src='https://static.retail.autofact.cl/blog/20160615165912.original7202790009111910632.jpg'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center space-y-4 rounded-lg'>
              <HeartHandshakeIcon className='text-white w-12 h-12' />
              <div className='text-center'>
                <p className='text-white text-lg font-semibold'>COMPRAMOS TU AUTO AL MEJOR PRECIO</p>
              </div>
            </div>
          </div>
        </div>

        <div className='relative group md:col-span-2 md:w-1/2 h-[101%]'>
          <img
            alt='Asesoramiento'
            className='w-full h-full object-cover rounded-lg'
            src='https://www.bizerba.com/dam/jcr:48b58ccd-3a04-4ea8-899e-6d976442acfd/consulting_1920x1080px_image_w642_h361_retina.jpg'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center space-y-4 rounded-lg'>
            <LaptopIcon className='text-white w-12 h-12' />
            <div className='text-center'>
              <p className='text-white text-lg font-semibold'>ASESORAMIENTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CarIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2' />
      <circle cx='7' cy='17' r='2' />
      <path d='M9 17h6' />
      <circle cx='17' cy='17' r='2' />
    </svg>
  )
}

function HeartHandshakeIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
      <path d='M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66' />
      <path d='m18 15-2-2' />
      <path d='m15 18-2-2' />
    </svg>
  )
}

function LaptopIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16' />
    </svg>
  )
}
