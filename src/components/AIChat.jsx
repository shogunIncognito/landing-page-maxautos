import { askAi } from '../services/api'
import cars from '../mocks/cars.json'
import Input from './Input'
import { BsSend } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AIChat () {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const messagesContainer = useRef(null)

  useEffect(() => {
    messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  }, [messages])

  const carsToAsk = cars.map(car => {
    const { _id, images, preview, createdAt, updatedAt, plate, description, ...restOfCar } = car
    return restOfCar
  })

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target[0].value

    if (!inputValue) return

    setLoading(true)
    const newMessages = [...messages, { role: 'user', content: inputValue }]
    setMessages(newMessages)

    askAi(carsToAsk, newMessages)
      .then(res => {
        setMessages(prev => [...prev, res])
      })
      .finally(() => setLoading(false))

    e.target[0].value = ''
  }

  return (
    <div className='fixed z-50 bottom-4 right-4 w-[350px] md:w-[400px] max-h-[460px] rounded-lg border bg-white p-4 shadow-lg flex flex-col'>
      <div className='flex items-center justify-between pb-3'>
        <div className='flex items-center space-x-2'>
          <h2>Img</h2>
          <div>
            <div className='font-bold'>Übel</div>
            <div className='text-sm text-gray-500'>Tu asistente virtual</div>
          </div>
        </div>
      </div>

      <div ref={messagesContainer} className='flex flex-col overflow-y-auto space-y-2 p-1'>

        <div className='flex mr-auto bg-gray-100 text-black max-w-[90%] rounded-lg  p-3'>
          <p>Hola, ¿en qué puedo ayudarte?</p>
        </div>

        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'assistant' ? 'mr-auto bg-gray-100 text-black' : 'ml-auto bg-black text-white'} max-w-[90%] rounded-lg p-3`}>
            <p>{message.content}</p>
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
      </div>

      <form onSubmit={handleSubmit} className='mt-3 w-full mx-auto flex items-center space-x-2'>
        <Input placeholder='Send a message...' className='w-3/4' />
        <button>
          <BsSend className='cursor-pointer' />
        </button>
      </form>
    </div>
  )
}
