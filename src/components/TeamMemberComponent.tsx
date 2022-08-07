import { customColors } from 'constants/colors'
import styled from 'styled-components'

import { FaGraduationCap, FaToolbox } from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { useState } from 'react'

type TeamMemberType = {
  name: string
  id: string
  image: string
  motivation: string
  ausbildung: Array<string>
  behandlungsmethoden: Array<string>
}

export const TeamMemberComponent = (props: { member: TeamMemberType }) => {
  const [selectedStat, setSelectedStat] = useState<string>('picture')
  return (
    <TeamMember>
      <div style={{ display: 'flex', flex: '0 0 280px', height: 360 }}>
        {
          {
            picture: (
              <PictureContainer>
                <img
                  alt="img"
                  width={'100%'}
                  style={{ objectFit: 'cover' }}
                  src="team/sam.jpeg"
                  // src={`team/${props.member.id}.jpg`}
                />
              </PictureContainer>
            ),
            education: (
              <DetailTextContainer>
                <h4 style={{ marginBottom: 24 }}>Ausbildung</h4>
                {props.member.ausbildung.map((methode, idx) => (
                  <p style={{ marginBottom: 16 }}>{methode}</p>
                ))}
              </DetailTextContainer>
            ),
            skills: (
              <DetailTextContainer>
                <h4 style={{ marginBottom: 24 }}>Behandlungsmethoden</h4>
                {props.member.behandlungsmethoden.map((methode, idx) => (
                  <p style={{ marginBottom: 16 }}>{methode}</p>
                ))}
              </DetailTextContainer>
            ),
            default: (
              <PictureContainer>
                <img
                  alt="img"
                  width={'100%'}
                  style={{ objectFit: 'cover' }}
                  src={`team/${props.member.id}.jpg`}
                />
              </PictureContainer>
            ),
          }[selectedStat || 'default']
        }
      </div>
      <div
        style={{
          display: 'flex',

          alignItems: 'center',
        }}
      >
        <IconWrapper
          onClick={() => setSelectedStat('picture')}
          style={{
            backgroundColor:
              selectedStat === 'picture' || !selectedStat
                ? customColors.signaturePurple
                : customColors.signaturePurpleTransparent,
            transform: selectedStat === 'picture' ? 'scaleY(1.1)' : 'none',
          }}
        >
          <IoMdPerson size={24} color="white" />
        </IconWrapper>
        <IconWrapper
          onClick={() => setSelectedStat('education')}
          style={{
            backgroundColor:
              selectedStat === 'education' || !selectedStat
                ? customColors.signaturePurple
                : customColors.signaturePurpleTransparent,
            transform:
              selectedStat === 'education' || !selectedStat
                ? 'scaleY(1.1)'
                : 'none',
          }}
        >
          <FaGraduationCap size={24} color="white" />
        </IconWrapper>
        <IconWrapper
          onClick={() => setSelectedStat('skills')}
          style={{
            backgroundColor:
              selectedStat === 'skills' || !selectedStat
                ? customColors.signaturePurple
                : customColors.signaturePurpleTransparent,
            transform:
              selectedStat === 'skills' || !selectedStat
                ? 'scaleY(1.1)'
                : 'none',
          }}
        >
          <FaToolbox size={21} color="white" />
        </IconWrapper>
      </div>
      <TextContainer>
        <p style={{ fontWeight: 'bold', marginBottom: 8 }}>
          {props.member.name}
        </p>
        <p>{props.member.motivation}</p>
      </TextContainer>
    </TeamMember>
  )
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 16px 8px 0px 8px;
  transition: all 1s ease;
  background-color: white;
`

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  width: 100%;
  transition: all 1s ease;
`

const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  width: 100%;
  padding: 16px;
  transition: all 1s ease;
  overflow-y: scroll;
  background-color: #f7f7f7;
`

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition-property: transform;
  transition: 0.3s ease-in-out;
`

const TeamMember = styled.div`
  display: flex;
  position: relative;
  flex: 0 0 280px;
  height: 490px;
  margin: 32px;
  flex-direction: column;
  overflow: hidden;

  /* :hover ${PictureContainer} {
    transform: translateY(-400px);
  }

  :hover ${TextContainer} {
    transform: translateY(163px);
    background-color: ${customColors.pastelBlue};
  } */
`
