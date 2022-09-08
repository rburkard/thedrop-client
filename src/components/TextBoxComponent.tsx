import styled from 'styled-components'

export const TextBoxComponent = () => {
  return (
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
          <p>Beat the other players to the location to collect your reward.</p>
        </Row>
      </Overlay>
    </TextBox>
  )
}

const TextBox = styled.div`
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
