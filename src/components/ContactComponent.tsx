import { customColors } from 'constants/colors'
import styled from 'styled-components'

import {
  MdCall,
  MdLocationOn,
  MdMail,
  MdTrain,
  MdOutlineCheck,
} from 'react-icons/md'
import { useState } from 'react'
import { sleep } from 'constants/variables'

const phoneNr = '+41 44 725 23 21'
const email = 'info@physiozueriwest.ch'
const address = 'Hohlstrasse 488, 8048 Zürich'

export const ContactComponent = (props: {
  setHovering: (x: boolean) => void
}) => {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    navigator.clipboard.writeText(`${phoneNr}`)
    setCopied(true)
    await sleep(3000)
    setCopied(false)
  }
  return (
    <ContactWrapper>
      <ContactRow
        onMouseEnter={() => props.setHovering(true)}
        onMouseLeave={() => props.setHovering(false)}
      >
        <IconWrapper>
          <MdCall size={40} color={customColors.pastelGreen} />
        </IconWrapper>
        <ContactText
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick()}
        >
          <p style={{ marginRight: 32, fontFamily: 'Quicksand' }}>{phoneNr}</p>
          {copied ? (
            <>
              <p
                style={{
                  color: customColors.pastelPurple,
                  fontSize: 14,
                  marginRight: 8,
                  textDecoration: 'unset',
                }}
              >
                kopiert
              </p>
              <MdOutlineCheck color={customColors.pastelPurple} size={14} />
            </>
          ) : (
            <></>
          )}{' '}
        </ContactText>
      </ContactRow>
      <ContactRow
        onMouseEnter={() => props.setHovering(true)}
        onMouseLeave={() => props.setHovering(false)}
      >
        <IconWrapper>
          <MdMail size={40} color={customColors.pastelBlue} />
        </IconWrapper>
        <ContactText>
          <a style={{ fontFamily: 'Quicksand' }} href={`mailto:${email}`}>
            {email}
          </a>
        </ContactText>
      </ContactRow>
      <ContactRow
        onMouseEnter={() => props.setHovering(true)}
        onMouseLeave={() => props.setHovering(false)}
      >
        <IconWrapper onClick={() => {}}>
          <MdLocationOn size={40} color={customColors.pastelRed} />
        </IconWrapper>
        <ContactText>
          <a
            href="https://goo.gl/maps/DcKD1herPjufeUU8A"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'Quicksand' }}
          >
            {address}
          </a>
        </ContactText>
      </ContactRow>
      <ContactRow
        onMouseEnter={() => props.setHovering(true)}
        onMouseLeave={() => props.setHovering(false)}
      >
        <IconWrapper onClick={() => {}}>
          <MdTrain size={40} color={customColors.pastelPurple} />
        </IconWrapper>
        <ContactText>
          <a
            href="https://goo.gl/maps/qJqrbLDg9rZLh8sN8"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'Quicksand' }}
          >
            Bahnhof Altstetten 7' zu Fuss
          </a>
        </ContactText>
      </ContactRow>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 400px;
  width: 400px;
`

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  transition-property: transform;
  transition: 0.3s ease-in-out;
`

const ContactRow = styled.div`
  display: flex;
  flex: 0 0 64px;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
  margin-bottom: 16px;
`

const ContactText = styled.h3`
  display: flex;
  align-items: center;
  margin-left: 32px;

  :hover {
    text-decoration: underline;
  }
`
