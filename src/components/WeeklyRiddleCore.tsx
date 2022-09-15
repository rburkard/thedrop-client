import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'

enum RiddleState {
  Initial = 'Initial',
  Correct = 'Correct',
  Wrong = 'Wrong',
  Done = 'Done',
  Lost = 'Lost',
}

export const WeeklyRiddleCore = (props: {
  setRiddleFullscreen: (v: boolean) => void
  riddleFullscreen: boolean
}) => {
  const [riddleState, setRiddleState] = useState(RiddleState.Initial)

  const [answer, setAnswer] = useState<string>()
  const [correct, setCorrect] = useState()
  const [token, setToken] = useState<string>()
  const [submitCount, setSubmitCount] = useState(0)

  const [disabled, setDisabled] = useState(false)

  const fetchRiddleUrl = 'https://romanverse.forone.red/api/get_weekly_riddle'
  const submitAnswerUrl =
    'https://romanverse.forone.red/api/post_weekly_solution'
  // const fetchRiddleUrl = 'http://localhost:3001/api/get_weekly_riddle'
  // const submitAnswerUrl = 'http://localhost:3001/api/post_weekly_solution'

  const [weeklyRiddle, setWeeklyRiddle] = useState('')

  useEffect(() => {
    setRiddleState(RiddleState.Initial)
  }, [])

  const fetchRiddle = async () => {
    try {
      const res = await fetch(fetchRiddleUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json = await res.json()

      if (json.text !== '') {
        setWeeklyRiddle(json.text)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchRiddle()
  }, [])

  useEffect(() => {
    if (!correct) {
      setRiddleState(RiddleState.Lost)
    }
    if (correct === true) {
      setRiddleState(RiddleState.Correct)
    }
    if (correct === false) {
      setRiddleState(RiddleState.Wrong)
    }
  }, [correct, riddleState])

  useEffect(() => {
    if (riddleState === RiddleState.Wrong && submitCount <= 5) {
      setTimeout(() => {
        setSubmitCount(submitCount + 1)
        setRiddleState(RiddleState.Initial)
        setCorrect(undefined)
      }, 2000)
    }
  }, [riddleState, submitCount])

  const handleSubmitAnswer = async () => {
    setSubmitCount(submitCount + 1)
    setDisabled(true)
    try {
      const res = await fetch(submitAnswerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answer: answer,
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

  switch (riddleState) {
    case RiddleState.Initial:
      return weeklyRiddle === '' ? (
        <h3>
          <Countdown date={1663257600000} onComplete={() => fetchRiddle()} />
        </h3>
      ) : (
        <div
          style={{ display: 'flex', flexDirection: 'column', minHeight: 360 }}
        >
          <Row>
            <h3 style={{ fontWeight: 'bold' }}>Welcome to Week #1</h3>
            <p>
              Only 14% of The Drop Players made it this far. But can you keep
              up?
            </p>
          </Row>
          <Row>
            <p>{weeklyRiddle}</p>
          </Row>
          <Row>
            <Input
              onChange={(event) => {
                setAnswer(event.target.value)
              }}
              placeholder={'Your answer here..'}
            />
          </Row>
          <Button onClick={() => handleSubmitAnswer()} disabled={disabled}>
            <h4 style={{ color: 'white' }}>Submit</h4>
          </Button>
        </div>
      )
    case RiddleState.Wrong:
      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', minHeight: 360 }}
        >
          <>
            <Row>
              <p>Wrong answer, try again.</p>
            </Row>
            <Row>
              <p>
                Our greatest glory is not in never falling, but in rising every
                time we fall.
              </p>
            </Row>
            <Row>
              <p>You go tiger!</p>
            </Row>
          </>
        </div>
      )

    case RiddleState.Correct:
      return (
        <>
          <Row>
            <p>
              Oooh yeah - well done! This week we don't have a special drop for
              you, but stay tuned for more!
            </p>
          </Row>
          <Row>
            <p>
              Here is your token to continue your streak and enter next weeks
              drop:
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
