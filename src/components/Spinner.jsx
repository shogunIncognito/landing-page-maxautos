import { ImSpinner2 } from 'react-icons/im'
import { twMerge } from 'tailwind-merge'

export default function Spinner ({ size = 50, color = 'text-slate-300', className, ...props }) {
  return (
    <div {...props} className={twMerge('flex h-full pb-32 justify-center items-center', className)}>
      <ImSpinner2 size={size} className={`animate-spin ${color} dark:text-blue-600`} />
    </div>
  )
}
