import { Carousel } from 'keep-react'
import { PiArrowLineLeft, PiArrowLineRight } from 'react-icons/pi'
import { IoMdClose } from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion'

export const FullscreenCarrousel = ({ data, handleClose, open, selectedImage }) => {
  const sortByImageSelected = selectedImage ? [selectedImage, ...data.filter((img) => img !== selectedImage)] : data

  return (
    <AnimatePresence
      initial={false}
      mode='wait'
      onExitComplete={() => null}
    >
      {open && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='fixed bg-black/60 z-[100] top-0 w-full h-screen flex justify-center items-center'
        >
          <IoMdClose size={38} color='white' className='absolute top-4 right-4 cursor-pointer' onClick={handleClose} />
          <Carousel
            className='w-5/6 z-[200] sm:w-3/5 md:w-3/4 lg:w-2/4 xl:w-2/4 sm:h-[90%] md:h-[90%] lg:h-[90%] 2xl:h-[90%] h-5/6'
            showControls
            leftControl={
              <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/80 group-hover:bg-slate-700/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10'>
                <PiArrowLineLeft size={20} weight='bold' color='white' />
              </span>
        }
            rightControl={
              <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/80 group-hover:bg-slate-700/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10'>
                <PiArrowLineRight size={20} weight='bold' color='white' />
              </span>
        }
          >
            {sortByImageSelected.map((image, index) => (
              <img
                src={image}
                alt='carrouselimg'
                key={index}
                className='w-full rounded-lg object-cover object-center'
              />
            ))}
          </Carousel>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
