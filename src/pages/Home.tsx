import { DESKTOP_STYLE, MOBILE_STYLE } from 'constants/variables'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SiMinds } from 'react-icons/si'
import { GiRunningNinja } from 'react-icons/gi'
import { customColors } from 'constants/colors'
import { BsInstagram } from 'react-icons/bs'

export const Home = () => {
  // const [currentQuote, setCurrentQuote] = useState<string>()

  const cities = ['Athens', 'Barcelona', 'San Jose', 'Züri']
  const [city, setCity] = useState(0)

  useEffect(() => {
    if (city < cities.length - 1) {
      setTimeout(() => setCity(city + 1), 500)
    }
  })

  const [answer, setAnswer] = useState<string>()
  const [email, setEmail] = useState<string>()

  const [correct, setCorrect] = useState()
  const [token, setToken] = useState<string>()
  const [submitCount, setSubmitCount] = useState(0)

  const [disabled, setDisabled] = useState(false)

  const url = 'https://romanverse.forone.red/api/post_solution'
  const urlEmail = 'https://romanverse.forone.red/api/post_email'

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    if (correct === false) {
      const disableButton = async () => {
        setDisabled(true)
        await sleep(4000)
        setDisabled(false)
        setCorrect(undefined)
      }

      disableButton()
    }
  }, [submitCount, correct])

  const handleSubmit = async () => {
    setSubmitCount(submitCount + 1)
    console.log('submit launched')
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
  }

  const handleSubmitEmail = async () => {
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
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <img alt="drop-logo" src="logo.svg" />
      </LogoWrapper>
      <Content>
        <Section style={{ flex: '0 0 100vh' }}>
          <h3 style={{ marginBottom: 24 }}>Welcome to The Drop</h3>
          <City>
            <ContentCity>
              {cities.map((city) => (
                <h1>{city}</h1>
              ))}
            </ContentCity>
          </City>
        </Section>
        <Section>
          <h3 style={{ marginBottom: 56 }}>How does it work?</h3>
          <Explainer>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 40,
              }}
            >
              <BulbWrapper>
                <SiMinds size={80} />
              </BulbWrapper>
              <h4 style={{ marginLeft: 40 }}>
                Solve our riddle every Thursday 18:00 to reveal the drop
                location.
              </h4>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <NinjaWrapper>
                <GiRunningNinja size={80} />
              </NinjaWrapper>
              <h4 style={{ marginLeft: 40 }}>
                Beat the other players to the location to collect your reward.
              </h4>
            </div>
          </Explainer>
        </Section>
        <Section>
          <h3 style={{ marginBottom: 40 }}>How can I join?</h3>
          <h4 style={{ textAlign: 'center', marginBottom: 56 }}>
            The Drop is only for the best of the best. Solve our Riddle #1 to
            get your access token.
          </h4>
          <>
            <h4 style={{ marginBottom: 16 }}>I hide in the dark:</h4>
            <input
              onChange={(event) => {
                setAnswer(event.target.value)
              }}
              style={{
                border: `1px solid ${customColors.blue}`,
                borderRadius: 4,
                textAlign: 'center',
                marginBottom: 16,
                width: 200,
                height: 32,
              }}
            />
            {!correct && (
              <Button disabled={disabled} onClick={() => handleSubmit()}>
                <h4 style={{ color: 'white' }}>Submit</h4>
              </Button>
            )}
            {correct === true && (
              <>
                <p>
                  Welcome to the club, here is your token to login to the app:
                </p>
                <h3 style={{ color: customColors.blue, margin: '8px 0px' }}>
                  {token}
                </h3>
                <p style={{ marginBottom: 16 }}>
                  Our app is coming soon, follow us on insta for the latest news
                </p>
                <a href="https://www.instagram.com/thedrop.zurich/">
                  <BsInstagram size={32} />
                </a>
                <p style={{ marginBottom: 24, marginTop: 24 }}>
                  We love to connect with fellow game enthusiasts, tell us your
                  email if you want:
                </p>
                <>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                    style={{
                      border: `1px solid ${customColors.blue}`,
                      borderRadius: 4,
                      textAlign: 'center',
                      marginBottom: 16,
                      width: 200,
                      height: 32,
                    }}
                  />
                  <Button onClick={() => handleSubmitEmail()}>
                    <h4 style={{ color: 'white' }}>Submit email</h4>
                  </Button>
                </>
              </>
            )}
            {correct === false ? (
              submitCount >= 3 ? (
                <>
                  <p style={{ marginBottom: 16 }}>
                    Drop your email to get a hint
                  </p>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                    style={{
                      border: `1px solid ${customColors.blue}`,
                      borderRadius: 4,
                      textAlign: 'center',
                      marginBottom: 16,
                      width: 200,
                      height: 32,
                    }}
                  />
                  <Button onClick={() => handleSubmitEmail()}>
                    <h4 style={{ color: 'white' }}>Submit email</h4>
                  </Button>
                </>
              ) : (
                <p>Nope. You won't catch me, but keep trying</p>
              )
            ) : (
              <></>
            )}
          </>
        </Section>
        <Section style={{ backgroundColor: 'black' }}>
          <div
            style={{
              display: 'flex',
              flex: '0 0 100px',
              height: 100,
              overflow: 'hidden',
              marginRight: 100,
            }}
          >
            <Wrap
              style={{
                width: 50,
                height: 100,
                overflowX: 'scroll',
              }}
            >
              <p>
                Just try to find me, I am faster than you and will stay hidden
                here... Oh no you got me, damn. Copy me over to win riddle #1 🥷
              </p>
            </Wrap>
          </div>
        </Section>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;

  ${DESKTOP_STYLE}  {
    flex-direction: row;
    padding: 0px 80px 100px 80px;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    /* padding: 104px 0px; */
  }
`

const LogoWrapper = styled.div`
  position: fixed;
  right: 40px;
  top: 40px;
  z-index: 99;

  right: 40px;
  top: 40px;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

const Section = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  border-bottom: 1px solid ${customColors.blue};
  padding: 104px 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const City = styled.div`
  display: flex;
  flex: 0 0 40px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`

const ContentCity = styled.div`
  animation: shuffleUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  @keyframes shuffleUp {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }

    80% {
      transform: translateY(-122px);
      opacity: 1;
    }

    100% {
      transform: translateY(-122px);
      opacity: 1;
    }
  }
`

const Explainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`

const BulbWrapper = styled.div`
  display: flex;
  flex: 0 0 64px;

  animation: wiggle;
  animation-iteration-count: infinite;
  animation-duration: 5s;

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(10deg);
    }
    30% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const NinjaWrapper = styled.div`
  display: flex;
  flex: 0 0 64px;

  animation: jump;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-duration: 5s;

  @keyframes jump {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    20% {
      transform: translate3d(10px, -10px, 0px);
    }
    30% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: translate3d(0px, 0px, 0px);
    }
  }
`

const Wrap = styled.div`
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

const Button = styled.button`
  display: flex;
  flex: 0 0 32px;
  width: 140px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${customColors.blue};
  background: ${customColors.blue};
  border-radius: 4px;
  margin-bottom: 40px;
  cursor: pointer;

  :hover {
    background-color: ${customColors.blueBright};
  }

  :disabled {
    background-color: grey;
  }
`
