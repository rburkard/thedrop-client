import { DESKTOP_STYLE, MOBILE_STYLE } from 'constants/variables'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Wrapper>
      <HeadingImage>
        <img
          src={'lead-image.png'}
          alt={'nati poster'}
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Overlay></Overlay>
      </HeadingImage>
      <div
        style={{
          display: 'flex',
          flex: '0 0 400px',
          width: '100%',
          maxWidth: 600,
          border: '2px solid black',
          margin: '80px 40px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Trailer</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #d7ebea;
`

const HeadingImage = styled.div`
  display: flex;
  height: 100vh;
`

const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
