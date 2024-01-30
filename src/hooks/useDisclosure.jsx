import { useState } from 'react'

/**
 *
 * @param {*} bool
 * @returns
 */

export default function useDisclosure (bool = false) {
  if (typeof bool !== 'boolean') console.error('useDisclosure hook debe recibir un booleano como argumento')
  const [open, setOpen] = useState(bool)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!open)

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle
  }
}
