import { CSSProperties } from 'styled-components'

const IconFactory = (path: string) => (props: { style: CSSProperties }) => {
  return <img src={path} alt={path} style={{ ...props.style }} />
}

export const LightningIcon = IconFactory('./icons/Icon_Lightning.png')
export const LockIcon = IconFactory('./icons/Icon_Lock.png')
export const QuestionIcon = IconFactory('./icons/Icon_Question.png')

export const Objects = [...Array(15)].map((_, idx) => {
  const path = `./icons/Objects${idx + 1}.png`
  return IconFactory(path)
})

export const EmptyBox = IconFactory('./icons/Objects6.png')
export const LiveDrop = IconFactory('./icons/Objects9.png')
export const RewardDrop = IconFactory('./icons/Objects8.png')
