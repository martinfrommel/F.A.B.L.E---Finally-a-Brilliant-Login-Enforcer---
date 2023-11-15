import { useState, useEffect } from 'react'

// Define a type for the breakpoints
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

function useBreakpoint() {
  const [size, setSize] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

function getWindowSize(): Breakpoint {
  const width = window.innerWidth
  if (width < 640) return 'sm'
  if (width >= 640 && width < 768) return 'md'
  if (width >= 768 && width < 1024) return 'lg'
  // Add more breakpoints as needed
  return 'xl'
}

export default useBreakpoint
