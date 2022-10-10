import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from 'utils/theme'
import createEmotionCache from 'utils/createEmotionCache'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps | any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
