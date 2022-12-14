import { LightningIcon } from 'Icons'
import styled from 'styled-components'

export const IntroTextBox = () => {
  return (
    <TextBox>
      <TextBoxImg src={'./assets/textBoxBackground.png'} />
      <Overlay>
        <Row>
          <LightningIcon style={{ width: 80, height: 80 }} />
          <p>Under development, we will be back soon with all the news.</p>
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
  z-index: 3;
`

const TextBoxImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Overlay = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 100px 64px 80px 40px;
`

const Row = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
`
