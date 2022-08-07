import styled from 'styled-components'

import { MdLocationOn, MdTrain } from 'react-icons/md'
import { customColors } from 'constants/colors'
import { useState } from 'react'

export const Kontakt = () => {
  const [displayWay, setDisplayWay] = useState(false)
  // const [hovering, setHovering] = useState(false)

  return (
    <Wrapper>
      <SideSeparator>
        <ImgWrapper>
          <img
            alt="map"
            width="100%"
            src="map.png"
            style={{
              borderRadius: 3,
              border: `2px solid ${customColors.pastelPurple}`,
            }}
          />
          <IconWrapper
            style={{ top: 160, right: 24 }}
            onMouseEnter={() => {
              setDisplayWay(true)
            }}
            onMouseLeave={() => {
              setDisplayWay(false)
            }}
          >
            <MdLocationOn
              size={64}
              color={customColors.signaturePurple}
              stroke={'white'}
            />
          </IconWrapper>
          <IconWrapper
            style={{ top: 40, left: 90 }}
            onMouseEnter={() => {
              setDisplayWay(true)
            }}
            onMouseLeave={() => {
              setDisplayWay(false)
            }}
          >
            <MdTrain size={64} color={customColors.signaturePurple} />
          </IconWrapper>
          {displayWay ? <WayLine /> : <></>}
        </ImgWrapper>
      </SideSeparator>
      <SideSeparator>
        {/* <ContactComponent setHovering={setHovering} /> */}
      </SideSeparator>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 160px);
  padding: 0px 200px 180px 200px;
`

const ImgWrapper = styled.div`
  display: flex;
  flex: 0 0 640px;
  height: 400px;
  position: relative;
`

const TextElement = styled.div`
  display: none;
`

const IconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  transition: 0.2s ease;

  box-shadow: 0px 0px 6px 6px rgba(242, 242, 242, 0.43);

  :hover {
    transform: scale(1.2);
  }

  :hover ${TextElement} {
    display: block;
  }
`

const SideSeparator = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const WayLine = styled.div`
  width: 420px;
  height: 8px;
  border-radius: 4px;
  top: 182px;
  left: 150px;
  background-color: ${customColors.signaturePurple};
  position: absolute;
  transform: rotate(20deg);
`
