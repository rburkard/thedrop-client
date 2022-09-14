import Countdown from 'react-countdown'
import styled from 'styled-components'

export const CountdownTextBox = () => {
  return (
    <TextBox>
      <TextBoxImg src={'./assets/textBoxBackground.png'} />
      <Overlay>
        <Row>
          <h4>Next drop in:</h4>
        </Row>
        <Row>
          <h3>
            <Countdown date={1663257600000} />
          </h3>
        </Row>
      </Overlay>
    </TextBox>
  )
}

const TextBox = styled.div`
  display: flex;
  margin: 80px 24px 64px 24px;
  max-width: 640px;
  position: relative;
  z-index: 3;
  padding: 24px;
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
  padding: 80px;
`

const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`
