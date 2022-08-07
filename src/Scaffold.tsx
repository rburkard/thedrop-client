import { MOBILE_BREAKPOINT_N } from 'constants/variables'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export const useIsMobile = (): boolean => {
  const dataView = useContext(IsMobile)
  return dataView
}

const IsMobile = createContext<boolean>(false)

IsMobile.displayName = 'IsMobile'

export const Scaffold = (props: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N)
    }

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <IsMobile.Provider value={!!isMobile}>
      <ParallaxProvider>{props.children}</ParallaxProvider>
    </IsMobile.Provider>
  )
}
