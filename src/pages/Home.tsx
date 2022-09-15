import { IntroTextBox } from 'components/IntroTextBox'
import { Riddle } from 'components/Riddle'
import { RiddleTextBox } from 'components/RiddleTextBox'
import { Objects } from 'Icons'
import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { LoginTextBox } from 'components/LoginTextBox'
import { CountdownTextBox } from 'components/CountdownTextBox'

export const Home = () => {
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
      <Tape src={'./assets/tape.png'} alt={'welcome sign'} />
      <Logo src={'./assets/logoWithBorder.png'} alt={'the drop logo'} />
      <CountdownTextBox />
      <TopoTop src={'./backgroundAssets/topoTop.png'} alt={'topography top'} />
      <IntroTextBox />
      <LoginTextBox />
      <RiddleTextBox
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

const Tape = styled.img`
  object-fit: contain;
  margin-top: 32px;
  width: 280px;
  max-width: '100%';
  z-index: 2;
`

const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 600px;
  z-index: 2;
`

const TopoTop = styled.img`
  object-fit: cover;
  object-position: 50% 0;
  margin: 0px 0px;
  z-index: 0;
  width: 100%;
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
