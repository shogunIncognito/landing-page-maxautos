import { twMerge } from 'tailwind-merge'

export default function Input ({ className, ...props }) {
  return (
    <input
      {...props}
      className={twMerge('py-1 bg-transparent dark:text-white text-black border-b-gray-400 dark:border-b-gray-200 font-medium rounded px-2 border-b-2 outline-none  hover:border-b-blue-500 focus:border-b-blue-600 dark:hover:border-b-blue-400 dark:focus:border-b-blue-600 transition-all duration-300', className)}
    />
  )
}
