import { twMerge } from 'tailwind-merge'

export default function Select ({ className, children, ...props }) {
  return (
    <select {...props} className={twMerge('font-medium py-2 rounded outline-none hover:border-b-blue-600 focus:border-b-blue-500 dark:hover:border-b-blue-400 dark:focus:border-b-blue-600 transition-all duration-300 bg-transparent border-b-2 dark:text-white text-black border-gray-400 dark:border-gray-200', className)}>
      {children}
    </select>
  )
}
