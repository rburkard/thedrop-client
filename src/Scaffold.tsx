import { customColors } from 'constants/colors'
import {
  DESKTOP_STYLE,
  MOBILE_BREAKPOINT_N,
  MOBILE_STYLE,
} from 'constants/variables'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { ParallaxProvider } from 'react-scroll-parallax'

export const useIsMobile = (): boolean => {
  const dataView = useContext(IsMobile)
  return dataView
}

const IsMobile = createContext<boolean>(false)

IsMobile.displayName = 'IsMobile'

export const Scaffold = (props: { children: ReactNode }) => {
  const menuItems = [
    // { id: 'kontakt', label: 'Kontakt', color: customColors.pastelRed },
  ]

  const navigate = useNavigate()

  const [selectedItem, setSelectedItem] = useState('')
  const [isMobile, setIsMobile] = useState<boolean>()
  const [hoveredItem, setHoveredItem] = useState<string>()
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false)

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
