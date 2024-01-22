import { twMerge } from 'tailwind-merge'
import Spinner from './Spinner'

export default function Button ({ children, loading, className, ...props }) {
  return (
    <button
      loading={loading ? 1 : 0}
      {...props}
      className={twMerge('bg-[#0987A0] hover:bg-sky-500 disabled:bg-sky-900 font-semibold rounded disabled:pointer-events-none text-white px-6 py-3  transition-all duration-200 ease-in-out', className)}
    >
      {loading ? <Spinner className='p-0' size={24} /> : children}
    </button>
  )
}
