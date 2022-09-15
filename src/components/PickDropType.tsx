import { DropTypeEnum } from 'constants/types'
import { sleep } from 'constants/variables'
import { EmptyBox, LiveDrop, RewardDrop } from 'Icons'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const PickDropType = (props: {
  dropType: DropTypeEnum
  setSpinnerEnded: (v: boolean) => void
}) => {
  const [currIconIdx, setCurrIconIdx] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const run = async () => {
      await sleep(300)
      setCurrIconIdx((currIconIdx + 1) % 3)
      setCount(count + 1)
    }

    const runOther = async () => {
      await sleep(3000)
      props.setSpinnerEnded(true)
    }

    if (count < 14) {
      run()
    } else {
      runOther()
    }
  }, [currIconIdx])

  const Icons = [
    <LiveDrop style={{ width: 320 }} />,
    <EmptyBox style={{ width: 320 }} />,
    <RewardDrop style={{ width: 320 }} />,
  ]

  return (
    <Wrapper>
      {count === 14 ? (
        <h3>No extra drop this week.</h3>
      ) : (
        <h3>Trying your luck for an extra drop or reward...</h3>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Icons[currIconIdx]}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
