import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function IsThisShared({ children }: Props) {
  return (
    <div>
      {children}
      <p>Is this shared?</p>
    </div>
  )
}

export default IsThisShared
