import { Link } from 'react-router-dom'
import Button from './Button'

export default function CarNotFound () {
  return (
    <div className='flex flex-col h-[80dvh]'>
      <div className='flex-1 flex items-center justify-center w-full'>
        <div className='text-center space-y-7'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>Auto no encontrado</h1>
            <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              El auto que buscas no está disponible. Por favor revisa nuestro inventario para otras opciones.
            </p>
          </div>
          <div className='inline-flex flex-col gap-2 mx-auto sm:flex-row sm:gap-4 lg:gap-2'>
            <Link to='/cars'>
              <Button className='w-full sm:w-auto bg-blue-950 hover:bg-blue-900'>Inventario</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
