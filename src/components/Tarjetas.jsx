'use client'
import { MdOutlineSell } from 'react-icons/md'
import { GiBuyCard } from 'react-icons/gi'
import { TiDeviceDesktop } from 'react-icons/ti'
import { motion } from 'framer-motion'

export default function Tarjetas () {
  return (
    <>
      <div className='flex flex-col select-none md:flex-row w-full mt-[35px] mb-5 justify-around -z-10 overflow-hidden '>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='relative min-w-[30%] h-[250px] flex my-5 md:my-0 justify-center shadow-md shadow-black'
        >
          <img className='-z-0 object-cover pointer-events-none w-full h-full absolute hover:scale-105 transition-[1.5]' src='https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/ikusi_ikusi_image_283.jpeg' />
          <div className='z-10 w-full h-full bg-black/60 p-3 flex flex-col justify-center items-center'>
            <MdOutlineSell className='z-10 block mx-auto text-white' size={40} />
            <p className='z-10 block bottom-0 text-white'>VENTA DE AUTOS DE <br /> CALIDAD</p>
          </div>

        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='relative min-w-[30%] h-[250px] flex my-5 md:my-0 justify-center shadow-md shadow-black'
        >
          <img className='-z-0 object-cover pointer-events-none w-full h-full absolute hover:scale-105 transition-[1.5]' src='https://static.retail.autofact.cl/blog/20160615165912.original7202790009111910632.jpg' />
          <div className='z-10 w-full h-full bg-black/60 p-3 flex flex-col justify-center items-center'>
            <GiBuyCard className='z-10 block mx-auto text-white' size={40} />
            <p className='z-10 block bottom-0 text-white'>COMPRAMOS TU AUTO AL <br />MEJOR PRECIO </p>
          </div>

        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='relative min-w-[30%] h-[250px] flex my-5 md:my-0 justify-center shadow-md shadow-black'
        >
          <img className='-z-0 object-cover pointer-events-none w-full h-full absolute hover:scale-105 transition-[1.5]' src='https://www.bizerba.com/dam/jcr:48b58ccd-3a04-4ea8-899e-6d976442acfd/consulting_1920x1080px_image_w642_h361_retina.jpg' />
          <div className='z-10 w-full h-full bg-black/60 p-3 flex flex-col justify-center items-center'>
            <TiDeviceDesktop className='z-10 block mx-auto text-white' size={40} />
            <p className='z-10 block bottom-0 text-white'>ASESORAMIENTO</p>
          </div>
        </motion.div>
      </div>

    </>
  )
}
