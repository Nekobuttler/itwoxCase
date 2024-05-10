import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'
import { AuthContext } from '../../../packages/app/features/services/authContext'
import { useAuth } from '../../../packages/app/features/hooks/useAuth'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
//import { Provider } from 'react-redux'

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const { user, login, logout, setUser } = useAuth()

  return (
    <>
      <Head>
        <title>ItWoxInterviewCase</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthContext.Provider value={{ user, setUser }}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default MyApp
