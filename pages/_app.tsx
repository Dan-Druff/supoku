import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SupokuContextProvider } from '@/context/SupokuContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SupokuContextProvider>
      <Component {...pageProps} />
    </SupokuContextProvider>
    )
}
