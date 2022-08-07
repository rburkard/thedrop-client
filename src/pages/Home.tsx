import { Artwork3Component } from 'components/Artwork3'
import { ContactComponent } from 'components/ContactComponent'
import { DESKTOP_STYLE, MOBILE_STYLE } from 'constants/variables'
import { useState } from 'react'
import styled from 'styled-components'

export const Home = () => {
  // const [currentQuote, setCurrentQuote] = useState<string>()
  const [hovering, setHovering] = useState(false)

  return (
    <Wrapper>
      <SiteSplitter>
        <ArtWrapper
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Artwork3Component
            // setCurrentQuote={setCurrentQuote}
            hovering={hovering}
          />
          {/* <QuoteWrapper>
            {currentQuote && <Quote>"{currentQuote}" - Karin</Quote>}
          </QuoteWrapper> */}
        </ArtWrapper>
      </SiteSplitter>
      <SiteSplitter>
        <ContactComponentWrapper>
          <ContactComponent setHovering={setHovering} />
        </ContactComponentWrapper>
      </SiteSplitter>
    </Wrapper>
  )
}

// const quoteAppear = keyframes`
//   from {
//     opacity: 0;
//   }

//   to {
//     opacity: 1;
//   }
// `

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;
  height: calc(100vh - 200px);

  ${DESKTOP_STYLE}  {
    flex-direction: row;
    padding: 0px 80px 100px 80px;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    /* padding: 104px 0px; */
  }
`

const ArtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${DESKTOP_STYLE} {
    padding-bottom: 160px;
  }

  /* ${MOBILE_STYLE} {
    display: none;
  } */
`

const ContactComponentWrapper = styled.div`
  display: flex;

  ${DESKTOP_STYLE}  {
    padding-bottom: 140px;
  }

  ${MOBILE_STYLE} {
    padding-bottom: 32px;
    padding-left: 16px;
  }
`

// const QuoteWrapper = styled.div`
//   display: flex;
//   flex: 0 0 100px;
//   justify-content: center;
//   align-items: center;
//   max-width: 640px;
//   margin-top: 40px;
// `

const SiteSplitter = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// const Quote = styled.h3`
//   opacity: 0;
//   animation: ${quoteAppear} 2s linear;
//   animation-fill-mode: forwards;
//   text-align: center;
//   color: grey;
//   font-style: italic;
// `
