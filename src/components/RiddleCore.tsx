import { useEffect, useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import styled from 'styled-components'

enum RiddleState {
  Initial = 'Initial',
  Correct = 'Correct',
  Wrong = 'Wrong',
}

export const RiddleCore = () => {
  const [riddleState, setRiddleState] = useState(RiddleState.Initial)

  const [answer, setAnswer] = useState<string>()
  const [email, setEmail] = useState<string>()

  console.log(answer)
  const [correct, setCorrect] = useState()
  const [token, setToken] = useState<string>()
  const [submitCount, setSubmitCount] = useState(0)

  const [disabled, setDisabled] = useState(false)

  const url = 'https://romanverse.forone.red/api/post_solution'
  const urlEmail = 'https://romanverse.forone.red/api/post_email'

  useEffect(() => {
    if (correct === true) {
      setRiddleState(RiddleState.Correct)
    }
    if (correct === false) {
      setRiddleState(RiddleState.Wrong)
    }
  }, [correct])

  useEffect(() => {
    if (riddleState === RiddleState.Wrong && submitCount <= 5) {
      setTimeout(() => {
        setSubmitCount(submitCount + 1)
        setRiddleState(RiddleState.Initial)
      }, 4000)
    }
  }, [riddleState, submitCount])

  const handleSubmit = async () => {
    setSubmitCount(submitCount + 1)
    try {
      setDisabled(true)
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer: answer,
          email: email || 'No email provided',
        }),
      })

      const json = await res.json()

      setCorrect(json.correct)
      setToken(json.token)
      setDisabled(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmitEmail = async () => {
    try {
      setDisabled(true)
      fetch(urlEmail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer: answer,
          email: email || 'No email provided',
          correct: correct,
          hint: correct === false ? true : false,
        }),
      })
      setDisabled(false)
    } catch (err) {
      console.log(err)
    }
  }

  switch (riddleState) {
    case RiddleState.Initial:
      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}
        >
          <Row>
            <h3 style={{ fontWeight: 'bold' }}>How can I join?</h3>
            <p>
              The drop is only for the best of the best. Solve our Riddle #1 to
              get your access token.
            </p>
          </Row>
          <Row>
            <p>I hide in the dark.</p>
            <Input
              onChange={(event) => {
                setAnswer(event.target.value)
              }}
            />
          </Row>
          <Button onClick={() => handleSubmit()} disabled={disabled}>
            <h4 style={{ color: 'white' }}>Submit</h4>
          </Button>
        </div>
      )
    case RiddleState.Wrong:
      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}
        >
          {submitCount < 5 ? (
            <>
              <Row>
                <p>Wrong answer, try again.</p>
              </Row>
              <Row>
                <p>
                  Our greatest glory is not in never falling, but in rising
                  every time we fall.
                </p>
              </Row>
              <Row>
                <p>You go tiger!</p>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <p>
                  Hey don't worry, its a very hard riddle. Enter your email and
                  get a hint if you want.
                </p>
              </Row>
              <Row>
                <Input
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
              </Row>
              <Button onClick={() => handleSubmitEmail()} disabled={disabled}>
                <h4 style={{ color: 'white' }}>Submit</h4>
              </Button>
            </>
          )}
        </div>
      )

    case RiddleState.Correct:
      return (
        <>
          <Row>
            <p>
              Oooh yeah - Welcome to the club, here is your token for our App
            </p>
          </Row>
          <Row
            style={{
              border: '1px solid white',
              borderRadius: 5,
              padding: 8,
            }}
          >
            <h3 style={{ color: 'orange' }}>{token}</h3>
          </Row>
          <Row>
            <p style={{ marginBottom: 16 }}>
              Our App is coming next week, follow us on insta for the latest
              news
            </p>
            <a href="https://www.instagram.com/thedrop.zurich/">
              <BsInstagram size={32} />
            </a>
          </Row>
        </>
      )
  }
}

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
`
