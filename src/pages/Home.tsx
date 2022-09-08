import { TextBoxComponent } from 'components/TextBoxComponent'
import { TextBoxLongComponent } from 'components/TextBoxLongComponent'
import { Objects } from 'Icons'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Wrapper>
      <Tape src={'./assets/tape.png'} alt={'welcome sign'} />
      <Logo src={'./assets/logoWithBorder.png'} alt={'the drop logo'} />
      <TopoTop src={'./backgroundAssets/topoTop.png'} alt={'topography top'} />
      <TextBoxComponent />
      <TextBoxLongComponent />
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
  margin-top: 56px;
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
  margin: 64px 0px;
  z-index: 0;
  width: 100%;
`

const TopoBottom = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 120px;
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
