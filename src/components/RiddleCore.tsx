import { useEffect, useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import { ImEnlarge2 } from 'react-icons/im'
import styled from 'styled-components'
import { Riddle } from './Riddle'

enum RiddleState {
  Initial = 'Initial',
  Correct = 'Correct',
  Wrong = 'Wrong',
  Done = 'Done',
  Lost = 'Lost',
}

export const RiddleCore = (props: {
  setRiddleFullscreen: (v: boolean) => void
  riddleFullscreen: boolean
}) => {
  const [riddleState, setRiddleState] = useState(RiddleState.Initial)

  const [answer, setAnswer] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [correct, setCorrect] = useState()
  const [token, setToken] = useState<string>()
  const [submitCount, setSubmitCount] = useState(0)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const [disabled, setDisabled] = useState(false)

  const url = 'https://romanverse.forone.red/api/post_solution'
  const urlEmail = 'https://romanverse.forone.red/api/post_email'

  useEffect(() => {
    if (!correct && emailSubmitted) {
      setRiddleState(RiddleState.Lost)
    }
    if (correct === true && emailSubmitted) {
      setRiddleState(RiddleState.Done)
    }
    if (correct === true && !emailSubmitted) {
      setRiddleState(RiddleState.Correct)
    }
    if (correct === false) {
      setRiddleState(RiddleState.Wrong)
    }
  }, [correct, emailSubmitted, riddleState])

  useEffect(() => {
    if (riddleState === RiddleState.Wrong && submitCount <= 5) {
      setTimeout(() => {
        setSubmitCount(submitCount + 1)
        setRiddleState(RiddleState.Initial)
        setCorrect(undefined)
      }, 4000)
    }
  }, [riddleState, submitCount])

  const handleSubmit = async () => {
    setSubmitCount(submitCount + 1)
    setDisabled(true)
    try {
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
    } catch (err) {
      console.log(err)
    }
    setDisabled(false)
  }

  const handleSubmitEmail = async () => {
    setDisabled(true)
    setEmailSubmitted(true)
    try {
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
    } catch (err) {
      console.log(err)
    }
    setDisabled(false)
  }

  switch (riddleState) {
    case RiddleState.Initial:
      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', minHeight: 360 }}
        >
          <Row>
            <h3 style={{ fontWeight: 'bold' }}>How can I join?</h3>
            <p>
              The drop is only for the best of the best. Solve our Riddle #1 to
              get your access token.
            </p>
          </Row>
          <Row>
            <div
              style={{
                position: 'absolute',
                top: 64,
                right: 64,
                cursor: 'pointer',
              }}
              onClick={() => props.setRiddleFullscreen(true)}
            >
              <ImEnlarge2 color={'white'} size={24} />
            </div>
            <Riddle />
            <Input
              onChange={(event) => {
                setAnswer(event.target.value)
              }}
              placeholder={'Your answer here..'}
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
          style={{ display: 'flex', flexDirection: 'column', minHeight: 360 }}
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
          <Row>
            <p>
              We love to connect with fellow game enthusiasts. Enter your email
              if you want.
            </p>
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
      )

    case RiddleState.Done:
      return (
        <>
          <Row>
            <p>See you next week at 18:00 in the app!</p>
          </Row>
        </>
      )

    case RiddleState.Lost:
      return (
        <>
          <Row>
            <p>Well email you, stay tuned!</p>
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
  margin: 16px 0px;
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
