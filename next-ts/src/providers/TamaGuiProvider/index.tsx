'use client'

import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { TamaguiProvider } from 'tamagui'

import '@tamagui/core/reset.css'

import config from '../../tamagui/config'

if (process.env.NODE_ENV === 'production') {
  require('../../public/tamagui.css')
}

interface Props {
  children: React.ReactNode
}

function TamaGuiProvider({ children }: Props) {
  useServerInsertedHTML(() => {
    return <>{config.getNewCSS()}</>
  })

  return (
    <TamaguiProvider disableInjectCSS disableRootThemeClass config={config}>
      {children}
    </TamaguiProvider>
  )
}

export default TamaGuiProvider
