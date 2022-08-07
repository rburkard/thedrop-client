import { customColors } from 'constants/colors'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

export const Artwork2Component = (props: {
  setCurrentQuote: (v: string | undefined) => void
}) => {
  // const rectangles = [
  //   {
  //     backgroundColor: customColors.pastelOrange,
  //     top: 330,
  //     left: 0,
  //     width: 270,
  //     height: 70,
  //     animationDelay: '0s',
  //     quote:
  //       'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
  //   },
  //   {
  //     backgroundColor: customColors.pastelYellow,
  //     top: 250,
  //     left: 130,
  //     width: 140,
  //     height: 60,
  //     animationDelay: '0.5s',
  //     quote: 'Schmerzfrei zu sein erfordert oft besonderen Einsatz.',
  //   },
  //   {
  //     backgroundColor: customColors.pastelGreen,
  //     top: 90,
  //     left: 290,
  //     width: 110,
  //     height: 310,
  //     animationDelay: '1s',
  //     quote:
  //       'Der menschliche Körper besteht aus unzähligen Einzelteilen, funktioniert aber als Ganzes.',
  //   },
  //   {
  //     backgroundColor: customColors.pastelPurple,
  //     top: 90,
  //     left: 0,
  //     width: 110,
  //     height: 220,
  //     animationDelay: '1.5s',
  //     quote: 'Ein gesunder Geist wohnt in einem gesunden Körper',
  //   },
  //   {
  //     backgroundColor: customColors.pastelRed,
  //     top: 0,
  //     left: 290,
  //     width: 110,
  //     height: 70,
  //     animationDelay: '2s',
  //     quote: 'Take care of your body. It is the only place you have to live.',
  //   },
  //   {
  //     backgroundColor: customColors.pastelBlue,
  //     top: 0,
  //     left: 0,
  //     width: 270,
  //     height: 70,
  //     animationDelay: '2.5s',
  //     quote: 'Fall in Love with taking care of your body',
  //   },
  // ]

  const [hoverIdx, setHoverIdx] = useState<number>()

  return (
    <ArtContainer>
      {[...Array(12)].map((rect, idx) => (
        <Rectangle
          onMouseEnter={() => setHoverIdx(idx)}
          onMouseLeave={() => setHoverIdx(undefined)}
          key={idx}
          style={{
            transform:
              idx === hoverIdx
                ? `rotate(${30 * idx}deg) scaleY(1.1)`
                : `rotate(${30 * idx}deg)`,
            animationDelay: `${idx * 0.1}s`,
            width: `${280 + Math.random() * 60}px`,
            height: `${80 + Math.random() * 8}px`,
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
    opacity: 0.6;
  }
`

const ArtContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  position: relative;
`

const Rectangle = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${appear} 4s linear;
  animation-fill-mode: forwards;
  background-color: ${customColors.signaturePurple};
  clip-path: ellipse(28% 28% at 50% 50%);
  transform-origin: 0% 50%;

  top: calc(50% - 48px / 2);
  left: 50%;
  cursor: pointer;

  transition-property: transform;
  transition: 2s ease-in;

  :hover {
    transform: scale(1.2);
  }
`
