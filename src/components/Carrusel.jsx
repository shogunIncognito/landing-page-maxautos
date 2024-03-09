import { motion } from 'framer-motion'
import { brandsCarrousel } from '../helpers/data'
import { useNavigate } from 'react-router-dom'

export default function Carrusel () {
  const router = useNavigate()
  return (
    <>
      <motion.div id='slider-conteiner' className='my-5 w-full overflow-hidden h-[270px] flex items-center'> {/* slider-conteiner */}
        <motion.div className='flex cursor-grab hola mt-3 gap-[60px]' drag='x' dragConstraints={{ right: 0, left: -2000 }}> {/* slider */}
          {
            brandsCarrousel.map((item, index) => (
              <motion.div
                onClick={() => router(`/cars?filter=${item.name}#catalogo`)}
                key={index}
                className='min-w-[150px] h-[190px] border-2 border-slate-200 flex flex-col justify-center items-center rounded-[12px] pt-4 transition-[2.0] shadow-lg group hover:scale-110'
              >
                <motion.div className='relative border-2 bg-slate-200 w-[120px] h-[70%] flex justify-center items-center rounded-lg group-hover:bg-blue-100  transition-[2.0] overflow-hidden'>
                  <img alt={item.name} className={`${item.width} ${item.height} pointer-events-none z-[11] group-hover:hidden`} src={item.urlimg} />{/* item */}
                  <img alt={item.name} className='z-10 object-cover w-full h-full opacity-80 absolute invisible group-hover:visible' src={item.imgUrl} />
                </motion.div>
                <div className='h-[30%] flex items-center justify-center'>
                  <p className='capitalize'>{item.name}</p>
                </div>
              </motion.div>
            ))
          }
          {
            brandsCarrousel.map((item, index) => (
              <motion.div
                onClick={() => router(`/cars?filter=${item.name}#catalogo`)}
                key={index}
                className='relative min-w-[150px] h-[190px] border-2 border-slate-200 flex flex-col justify-center items-center rounded-[12px] pt-4 transition-[2.0] shadow-lg group hover:scale-110 overflow-hidden'
              >
                <motion.div className='border-2 bg-slate-200 relative w-[120px] h-[70%] flex justify-center items-center rounded-lg group-hover:bg-blue-100 transition-[2.0] overflow-hidden'>
                  <img alt={item.name} className={`${item.width} ${item.height} pointer-events-none z-[11] group-hover:hidden`} src={item.urlimg} />{/* item */}
                  <img alt={item.name} className='z-10 object-cover w-full h-full opacity-80 absolute invisible group-hover:visible' src={item.imgUrl} />
                </motion.div>
                <div className='h-[30%] flex items-center justify-center'>
                  <p className='uppercase'>{item.name}</p>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </>
  )
}
