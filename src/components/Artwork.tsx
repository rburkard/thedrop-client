import { customColors } from 'constants/colors'
import styled, { keyframes } from 'styled-components'

export const ArtworkComponent = (props: {
  setCurrentQuote: (v: string | undefined) => void
}) => {
  const rectangles = [
    {
      backgroundColor: customColors.pastelOrange,
      top: 330,
      left: 0,
      width: 270,
      height: 70,
      animationDelay: '0s',
      quote:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
    },
    {
      backgroundColor: customColors.pastelYellow,
      top: 250,
      left: 130,
      width: 140,
      height: 60,
      animationDelay: '0.5s',
      quote: 'Schmerzfrei zu sein erfordert oft besonderen Einsatz.',
    },
    {
      backgroundColor: customColors.pastelGreen,
      top: 90,
      left: 290,
      width: 110,
      height: 310,
      animationDelay: '1s',
      quote:
        'Der menschliche Körper besteht aus unzähligen Einzelteilen, funktioniert aber als Ganzes.',
    },
    {
      backgroundColor: customColors.pastelPurple,
      top: 90,
      left: 0,
      width: 110,
      height: 220,
      animationDelay: '1.5s',
      quote: 'Ein gesunder Geist wohnt in einem gesunden Körper',
    },
    {
      backgroundColor: customColors.pastelRed,
      top: 0,
      left: 290,
      width: 110,
      height: 70,
      animationDelay: '2s',
      quote: 'Take care of your body. It is the only place you have to live.',
    },
    {
      backgroundColor: customColors.pastelBlue,
      top: 0,
      left: 0,
      width: 270,
      height: 70,
      animationDelay: '2.5s',
      quote: 'Fall in Love with taking care of your body',
    },
  ]

  return (
    <ArtContainer>
      <SquareSignature
        onMouseEnter={() => props.setCurrentQuote('Wir sind Physio Züri West.')}
        onMouseLeave={() => props.setCurrentQuote(undefined)}
        style={{ animationDelay: '3s' }}
      />
      {rectangles.map((rect, idx) => (
        <Rectangle
          onMouseEnter={() => props.setCurrentQuote(rect.quote)}
          onMouseLeave={() => props.setCurrentQuote(undefined)}
          key={idx}
          style={{
            backgroundColor: rect.backgroundColor,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            animationDelay: rect.animationDelay,
          }}
        ></Rectangle>
      ))}
    </ArtContainer>
  )
}

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const ArtContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  position: relative;
`

const Rectangle = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${appear} 4s linear;
  animation-fill-mode: forwards;

  top: 0;
  right: 0;
  width: 110px;
  height: 70px;
  background-color: ${customColors.pastelRed};
  cursor: pointer;

  transition-property: transform;
  transition: 0.5s ease-in;

  :hover {
    transform: scale(1.05);
  }
`

const SquareSignature = styled.div`
  opacity: 0;
  position: absolute;
  top: 90px;
  left: 130px;
  width: 140px;
  height: 140px;
  background-color: ${customColors.signaturePurple};

  transition-property: transform;
  transition: 0.5s ease-in;

  :hover {
    transform: scale(1.1);
  }

  animation: ${appear} 3s ease-in-out;
  animation-fill-mode: forwards;
  cursor: pointer;
`
