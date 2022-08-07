import { DESKTOP_STYLE, MOBILE_STYLE } from 'constants/variables'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SiMinds } from 'react-icons/si'
import { GiRunningNinja } from 'react-icons/gi'
import { customColors } from 'constants/colors'
import { Parallax, useParallax } from 'react-scroll-parallax'

export const Home = () => {
  // const [currentQuote, setCurrentQuote] = useState<string>()
  const [hovering, setHovering] = useState(false)

  const cities = ['Athens', 'Barcelona', 'San Jose', 'Züri']
  const [city, setCity] = useState(0)

  useEffect(() => {
    if (city < cities.length - 1) {
      setTimeout(() => setCity(city + 1), 500)
    }
  })

  // const parallax = useParallax({
  //   speed: -10,
  // })

  return (
    <Wrapper>
      <LogoWrapper>
        <img alt="drop-logo" src="logo.svg" />
      </LogoWrapper>
      <Content>
        <Section>
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
          <h4 style={{ textAlign: 'center' }}>
            The Drop is only for the best of the best. Solve our Riddle #1 to
            get your access token.
          </h4>
        </Section>
        <Section style={{ backgroundColor: 'black' }}>
          <h3 style={{ marginBottom: 40 }}>Riddle #1</h3>
          <h4 style={{ textAlign: 'center' }}>
            The Drop is only for the best of the best. Solve our first riddle to
            get your access token.
          </h4>
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

  ${DESKTOP_STYLE}  {
    right: 40px;
    top: 40px;
  }

  ${MOBILE_STYLE} {
    right: -30px;
    top: 10px;
  }
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
