import { twMerge } from 'tailwind-merge'

export default function ModalBackdrop ({ children, open, className, ...props }) {
  if (!open) return

  return (
    <div className='z-40 absolute bg-black/60 backdrop-blur h-screen w-screen top-0 left-0 flex justify-center items-center'>
      <div {...props} className={twMerge('animate__animated animate__faster max-w-[90%] shadow-md overflow-auto max-h-[90%] animate__fadeIn w-auto mx-5 flex z-[60] flex-col dark:bg-[#171923] dark:text-white bg-slate-50 text-black p-6 rounded', className)}>
        {children}
      </div>
    </div>
  )
}
