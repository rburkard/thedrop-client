import { initialPassCodeUrl } from 'constants/envVar'
import { sleep } from 'constants/variables'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

export const LoginTextBox = () => {
  const [answer, setAnswer] = useState('')

  const navigate = useNavigate()

  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async () => {
    setDisabled(true)
    try {
      const res = await fetch(initialPassCodeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer: answer,
        }),
      })

      const json = await res.json()

      if (json.correct) {
        localStorage.setItem('dropUrl', json.url)
        navigate(`/${json.url}`)
      } else {
        setDisabled(true)
        await sleep(1000)
        setDisabled(false)
        setAnswer('')
      }
    } catch (err) {
      console.log(err)
    }
    setDisabled(false)
  }

  return (
    <TextBox>
      <TextBoxImg src={'./assets/textBoxBackground.png'} />
      <Overlay>
        <Row>
          <p>
            Already solved our access riddle below? Enter the code you
            retrieved.
          </p>
        </Row>
        <Row>
          <Input
            value={answer}
            onChange={(event) => {
              setAnswer(event.target.value)
            }}
            placeholder={'Access code'}
          />
        </Row>
        <Button onClick={() => handleSubmit()} disabled={disabled}>
          <h4 style={{ color: 'white' }}>Access The Drop</h4>
        </Button>
      </Overlay>
    </TextBox>
  )
}

const TextBox = styled.div`
  display: flex;
  margin: 0px 24px 64px 24px;
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
  padding: 100px 64px 80px 40px;
`

const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`

const Input = styled.input`
  border-bottom: 2px solid white;
  padding: 8px;
  margin: 16px 0px;
  width: 100%;
  ::placeholder {
    color: white;
  }
`

const Button = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #847a55;
  width: 100%;
  height: 40px;
  z-index: 20;

  :disabled {
    opacity: 0.3;
  }
`
