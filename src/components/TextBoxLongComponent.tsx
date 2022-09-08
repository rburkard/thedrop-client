import styled from 'styled-components'

export const TextBoxLongComponent = () => {
  return (
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
  )
}

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
