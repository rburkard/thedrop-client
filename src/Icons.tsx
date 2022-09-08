import { CSSProperties } from 'styled-components'

const IconFactory = (path: string) => (props: { style: CSSProperties }) => {
  return <img src={path} alt={path} style={{ ...props.style }} />
}

export const OneIcon = IconFactory('./icons/Objects8.png')

export const Objects = [...Array(15)].map((_, idx) => {
  const path = `./icons/Objects${idx + 1}.png`
  return IconFactory(path)
})
