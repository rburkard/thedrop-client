import styled from 'styled-components'
import { RiddleCore } from './RiddleCore'

export const RiddleTextBox = () => {
  return (
    <TextBoxLong>
      <TextBoxImg src={'./assets/textBoxLongBackground.png'} />
      <Overlay>
        <RiddleCore />
      </Overlay>
    </TextBoxLong>
  )
}

const TextBoxLong = styled.div`
  display: flex;
  margin: 64px 24px;
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
  padding: 100px 64px;
  gap: 32px;
`
