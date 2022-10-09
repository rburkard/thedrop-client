import styled from 'styled-components'

const items = [
  { name: 'r1.png', label: 'cx' },
  { name: 'r2.png', label: 'cy' },
  { name: 'r3.png', label: 'ax' },
  { name: 'r4.png', label: 'bz' },
  { name: 'r5.png', label: 'by' },
  { name: 'r6.png', label: '?' },
]
export const Riddle = () => {
  return (
    <Wrapper>
      {items.map((item, idx) => (
        <Column key={idx}>
          <ImgWrapper>
            <img
              src={`./initialRiddle/${item.name}`}
              alt={'riddletag'}
              style={{ objectFit: 'contain', width: '100%' }}
            />
            <p style={{ color: 'black' }}>{item.label}</p>
          </ImgWrapper>
        </Column>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 5px;
  padding: 16px;
  background-color: white;
`

const Column = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`

const ImgWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
