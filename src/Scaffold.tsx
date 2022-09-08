import { MOBILE_BREAKPOINT_N } from 'constants/variables'
import { Objects } from 'Icons'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'

export const useIsMobile = (): boolean => {
  const dataView = useContext(IsMobile)
  return dataView
}

console.log(Objects)
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
      <Wrapper>
        <img
          src={'./backgroundAssets/paper.png'}
          alt={'background paper'}
          style={{
            position: 'absolute',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <OverlayIcons>
          {Objects.map((Icon) => (
            <Icon
              style={{
                width: 64,
                height: 64,
                position: 'absolute',
                top: Math.random() * 2000,
                left: Math.random() * window.innerWidth,
              }}
            />
          ))}
        </OverlayIcons>
        <Overlay>{props.children}</Overlay>
      </Wrapper>
    </IsMobile.Provider>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
const OverlayIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 10;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 3;
`
