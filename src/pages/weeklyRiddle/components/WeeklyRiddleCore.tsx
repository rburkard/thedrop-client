import { fetchRiddleUrl, submitWeeklyAnswerUrl } from 'constants/envVar'
import { DropTypeEnum } from 'constants/types'
import { timestampWeekly } from 'constants/variables'
import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'
import { PickDropType } from './PickDropType'

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

  const [spinnerEnded, setSpinnerEnded] = useState(false)

  // const todayDropTime = 1663254000000
  const [answer, setAnswer] = useState<string>()
  const [correct, setCorrect] = useState()
  const [token, setToken] = useState<string>()
  const [submitCount, setSubmitCount] = useState(0)

  const [disabled, setDisabled] = useState(false)

  const [weeklyRiddle, setWeeklyRiddle] = useState<{
    text: string
    url: string
  }>()

  const fetchRiddle = async () => {
    console.log('fetching')
    try {
      const res = await fetch(fetchRiddleUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: '09-10-2022' }),
      })

      const json = await res.json()

      setWeeklyRiddle({ text: json.text, url: json.imageUrl })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (correct === undefined) {
      setRiddleState(RiddleState.Initial)
    }
    if (correct === true) {
      setRiddleState(RiddleState.Correct)
    }
    if (correct === false) {
      setRiddleState(RiddleState.Wrong)
    }
  }, [correct, riddleState])

  useEffect(() => {
    if (!weeklyRiddle) {
      fetchRiddle()
    }
  }, [weeklyRiddle])

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
      const res = await fetch(submitWeeklyAnswerUrl, {
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
      return !weeklyRiddle ? (
        <h3>
          <Countdown date={timestampWeekly} onComplete={() => fetchRiddle()} />
        </h3>
      ) : (
        <div
          style={{ display: 'flex', flexDirection: 'column', minHeight: 360 }}
        >
          <Row>
            <h3 style={{ fontWeight: 'bold' }}>Welcome to Week #2</h3>
          </Row>
          <Row>
            <h3>{weeklyRiddle.text}</h3>
          </Row>
          <Row>
            <img
              src={weeklyRiddle.url}
              alt={'weekly riddle'}
              style={{ width: '100%', maxHeight: 400, borderRadius: 10 }}
            />
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
      return spinnerEnded ? (
        <>
          <Row>
            <p>Oooh yeah</p>
          </Row>
          <Row>
            <p>This weeks drop took you:</p>
            <h3>
              {`${
                new Date(new Date().getTime() - timestampWeekly).getHours() - 1
              } hours ${new Date(
                new Date().getTime() - timestampWeekly,
              ).getMinutes()} minutes and ${new Date(
                new Date().getTime() - timestampWeekly,
              ).getSeconds()} seconds`}
            </h3>
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
      ) : (
        <PickDropType
          dropType={DropTypeEnum.None}
          setSpinnerEnded={setSpinnerEnded}
        />
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
            <p>We'll email you, stay tuned!</p>
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
