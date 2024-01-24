import { motion } from 'framer-motion'

export default function AnimatedMotion ({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
      exit={{ opacity: 0.5, transition: { duration: 0.3, ease: 'easeInOut' } }}
    >
      {children}
    </motion.div>
  )
}
