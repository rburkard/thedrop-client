import { Riddle } from 'pages/home/components/Riddle'
import { WeeklyRiddleTextBox } from 'pages/weeklyRiddle/components/WeeklyRiddleTextBox'
import { Objects } from 'Icons'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

export const RiddlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [riddleFullscreen, setRiddleFullScreen] = useState(false)
  return (
    <Wrapper>
      {riddleFullscreen && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            zIndex: 500,
            backgroundColor: '#5A5973',
            height: '100%',
            width: '100%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              cursor: 'pointer',
            }}
            onClick={() => setRiddleFullScreen(false)}
          >
            <AiOutlineClose color={'white'} size={40} />
          </div>
          <Riddle />
        </div>
      )}
      <Logo src={'./assets/logoWithBorder.png'} alt={'the drop logo'} />
      <WeeklyRiddleTextBox
        riddleFullscreen={riddleFullscreen}
        setRiddleFullscreen={setRiddleFullScreen}
      />
      <TopoBottom
        src={'./backgroundAssets/topoBottom.png'}
        alt={'topography bottom'}
      />
      <OverlayIcons>
        {Objects.map((Icon) => (
          <Icon
            style={{
              width: 64,
              height: 64,
              position: 'absolute',
              top: Math.random() * 2000,
              left: Math.random() * window.innerWidth - 80,
            }}
          />
        ))}
      </OverlayIcons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`

const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 600px;
  z-index: 2;
`

const TopoBottom = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 160px;
  object-position: 50% 0;
  margin-top: 64px;
  z-index: 100;
  position: fixed;
  bottom: 0;
`

const OverlayIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 1;
`
