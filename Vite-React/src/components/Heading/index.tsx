import { ReactNode } from 'react'

type HeadingProps = {
  title: string
  children?: ReactNode
}

function Heading({ title }: HeadingProps) {
  return <h1>{title}</h1>
}

export default Heading
