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

export const useIsMobile = (): boolean => {
  const dataView = useContext(IsMobile)
  return dataView
}

const IsMobile = createContext<boolean>(false)

IsMobile.displayName = 'IsMobile'

export const Scaffold = (props: { children: ReactNode }) => {
  const menuItems = [
    { id: '', label: 'Home', color: customColors.pastelPurple },
    { id: 'angebot', label: 'Angebot', color: customColors.pastelGreen },
    { id: 'ueber-uns', label: 'Über uns', color: customColors.pastelBlue },
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
      <Wrapper>
        <MenuWrapper>
          {isMobile ? (
            mobileNavExpanded ? (
              <MobileNavWrapper>
                <div
                  style={{
                    display: 'flex',
                    flex: '0 0 32px',
                    position: 'absolute',
                    right: 24,
                    top: 48,
                  }}
                >
                  <GrClose
                    size={32}
                    onClick={() => setMobileNavExpanded(false)}
                  />
                </div>
                {menuItems.map((item, idx) => {
                  return (
                    <p
                      style={{
                        fontSize: 18,
                        color:
                          selectedItem === item.id
                            ? customColors.signaturePurple
                            : '#373737',
                        fontWeight:
                          selectedItem === item.id ? 'bold' : 'normal',
                        marginBottom: 8,
                      }}
                      onClick={() => {
                        setSelectedItem(item.id)
                        setMobileNavExpanded(false)
                        navigate(`/${item.id}`)
                      }}
                    >
                      {item.label}
                    </p>
                  )
                })}
              </MobileNavWrapper>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flex: '0 0 32px',
                  position: 'absolute',
                  right: 24,
                  top: 48,
                }}
              >
                <GiHamburgerMenu
                  size={32}
                  onClick={() => setMobileNavExpanded(true)}
                />
              </div>
            )
          ) : (
            <MenuItems>
              {menuItems.map((item, idx) => {
                return (
                  <MenuItem
                    key={idx}
                    onClick={() => {
                      setSelectedItem(item.id)
                      navigate(`/${item.id}`)
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(undefined)}
                  >
                    <Title>{item.label}</Title>
                    <Line
                      style={{
                        backgroundColor:
                          selectedItem === item.id || hoveredItem === item.id
                            ? customColors.signaturePurple
                            : 'white',
                      }}
                    />
                  </MenuItem>
                )
              })}
            </MenuItems>
          )}
          {selectedItem !== '' ? (
            <img
              style={{ width: 240, cursor: 'pointer', marginRight: 24 }}
              alt="Logo Physio ZueriWest"
              src="/logo.png"
              onClick={() => {
                navigate(`/`)
              }}
            />
          ) : (
            <></>
          )}
        </MenuWrapper>
        <Content>{props.children}</Content>
      </Wrapper>
    </IsMobile.Provider>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${DESKTOP_STYLE}  {
    padding: 0px 32px 0px 104px;
    flex: 0 0 160px;
  }

  ${MOBILE_STYLE} {
    padding: 0px 24px;
    flex: 0 0 100px;
    flex-direction: row-reverse;
    justify-content: center;
  }
`

const MenuItems = styled.div`
  display: flex;

  ${DESKTOP_STYLE}  {
    flex-direction: row;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
  }
`

const Line = styled.div`
  width: 100%;
  height: 2px;
`

const Title = styled.h4`
  font-weight: 400;
`

const MenuItem = styled.div`
  display: flex;
  height: 28px;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  color: #373737;

  ${DESKTOP_STYLE}  {
    margin: 0px 64px 0px 0px;
    flex-direction: column;
  }

  :hover ${Title} {
    color: black;
  }

  :hover ${Line} {
    animation: slideAnimation;

    animation-duration: 1s;

    @keyframes slideAnimation {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`

const MobileNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  /* height: 200px; */
  background-color: white;
  border-bottom: 1px solid ${customColors.signaturePurple};
  padding: 32px;
  z-index: 99;
  opacity: 0;

  animation: openAnimation;

  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes openAnimation {
    0% {
      height: 0;
      opacity: 0;
    }

    20% {
      opacity: 0;
      height: 100px;
    }
    to {
      height: 200px;
      opacity: 1;
    }
  }
`
