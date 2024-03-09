import { askAi } from '../services/api'
import Input from './Input'
import { BsRobot, BsSend } from 'react-icons/bs'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useDisclosure from '../hooks/useDisclosure'
import { IoClose } from 'react-icons/io5'
import { Avatar } from 'keep-react'
import useCarsStore from '../hooks/useCarsStore'

export default function AIChat () {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { open, handleClose, handleOpen } = useDisclosure()
  const { cars, loading: carsLoading } = useCarsStore()
  const messagesContainer = useRef(null)

  useEffect(() => {
    if (open) messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  }, [messages])

  const carsToAsk = useMemo(() => cars.map(car => {
    const { _id, images, preview, createdAt, updatedAt, plate, description, ...restOfCar } = car
    return restOfCar
  }), [cars])

  if (carsLoading) return

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target[0].value

    if (!inputValue) return

    setLoading(true)
    const newMessages = [...messages, { role: 'user', content: inputValue }]
    setMessages(newMessages)

    askAi(carsToAsk, newMessages)
      .then(res => setMessages(prev => [...prev, res]))
      .catch(() => setError(true))
      .finally(() => setLoading(false))

    e.target[0].value = ''
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='flex content-center z-50 items-center justify-center justify-items-center'
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleOpen}
          className='fixed z-[20] ring-2 bottom-6 right-6 bg-black text-white p-2 rounded-md flex shadow-lg justify-center items-center space-x-2 cursor-pointer'
        >
          <BsRobot size={28} />
          <h2>ChatIA</h2>
        </motion.button>
      </motion.div>

      <AnimatePresence
        mode='wait'
        onExitComplete={() => null}
      >
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='fixed z-[100] bottom-4 right-4 w-[280px] md:w-[500px] max-h-[460px] rounded-lg border bg-white p-4 shadow-lg flex flex-col'
          >
            <div className='flex items-center justify-between pb-3'>
              <div className='flex items-center gap-2'>
                <Avatar shape='circle' />
                <div>
                  <div className='font-bold'>Übel</div>
                  <div className='text-sm text-gray-500'>Tu asistente virtual</div>
                </div>
              </div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                whileHover={{ scale: 1.2 }}
                onClick={handleClose}
              >
                <IoClose size={30} />
              </motion.button>
            </div>

            <div ref={messagesContainer} className='flex flex-col overflow-auto space-y-2 p-1'>

              <div className='flex mx-auto text-center text-xs opacity-75 bg-yellow-100 max-w-[95%] rounded-lg p-3'>
                <p>Por favor, ten en cuenta que el asistente puede cometer errores ocasionalmente. Siempre es recomendable verificar la información importante.</p>
              </div>

              <div className='flex mr-auto bg-gray-100 text-black max-w-[90%] rounded-lg  p-3'>
                <p>Hola, ¿en qué puedo ayudarte?</p>
              </div>

              {messages.map((message, index) => (
                <div key={index} className={`flex whitespace-pre-line ${message.role === 'assistant' ? 'mr-auto bg-gray-100 text-black' : 'ml-auto bg-black text-white'} max-w-[90%] rounded-lg p-3`}>
                  {message.content}
                </div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className='flex mr-auto justify-center bg-gray-100 text-black max-w-[90%] rounded-lg p-3'
                >
                  <div className='chat-bubble'>
                    <div className='typing'>
                      <div className='dot' />
                      <div className='dot' />
                      <div className='dot' />
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <div className='flex mr-auto bg-red-100 text-red-600 max-w-[90%] rounded-lg p-3'>
                  <p>Lo siento, ha ocurrido un error.</p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className='mt-3 w-full mx-auto flex items-center space-x-2'>
              <Input disabled={error} placeholder='Send a message...' className='w-full' />
              <button disabled={error}>
                <BsSend size={20} className='cursor-pointer' />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>

  )
}
