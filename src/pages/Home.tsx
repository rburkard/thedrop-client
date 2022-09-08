import styled from 'styled-components'

export const Home = () => {
  return (
    <Wrapper>
      <Tape src={'./assets/tape.png'} alt={'welcome sign'} />
      <Logo src={'./assets/logoWithBorder.png'} alt={'the drop logo'} />
      <TopoTop src={'./backgroundAssets/topoTop.png'} alt={'topography top'} />
      <TextBox>
        <TextBoxImg src={'./assets/textBoxBackground.png'} />
        <Overlay>
          <Row>
            <p>
              Solve our riddle every Thursday at 18:00 to reveal the drop
              location.
            </p>
          </Row>
          <Row>
            <p>
              Beat the other players to the location to collect your reward.
            </p>
          </Row>
        </Overlay>
      </TextBox>
      <TextBoxLong>
        <TextBoxImg src={'./assets/textBoxLongBackground.png'} />
        <Overlay>
          <Row>
            <h3 style={{ fontWeight: 'bold' }}>How can I join?</h3>
            <p>
              The drop is only for the best of the best. Solve our Riddle #1 to
              get your access token.
            </p>
          </Row>
          <Row>
            <p>I hide in the dark.</p>
            <Input></Input>
          </Row>
        </Overlay>
      </TextBoxLong>
      <TopoBottom
        src={'./backgroundAssets/topoBottom.png'}
        alt={'topography bottom'}
      />
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
`

const Logo = styled.img`
  object-fit: contain;
  width: 600px;
  max-width: 100%;
`

const TopoTop = styled.img`
  object-fit: cover;
  object-position: 50% 0;
  margin: 64px 0px;
  z-index: 1;
  width: 100%;
`

const TopoBottom = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 560px;
  object-position: 50% 0;
  margin-top: 64px;
  z-index: 1;
`

const TextBox = styled.div`
  display: flex;
  margin: 40px 24px;
  max-width: 640px;
  position: relative;
`

const TextBoxLong = styled.div`
  display: flex;
  margin: 40px 24px;
  max-width: 640px;
  position: relative;
`

const TextBoxImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 80px 64px;
  gap: 32px;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

const Input = styled.input`
  border-bottom: 2px solid white;
  padding: 8px;
`
