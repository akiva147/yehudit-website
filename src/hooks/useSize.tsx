import { useEffect, useState, useMemo } from 'react'

export const useSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return { width: windowSize.innerWidth, height: windowSize.innerHeight }
}

const getWindowSize = () => {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
}
