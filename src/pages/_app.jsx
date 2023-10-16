import 'focus-visible'
import '@/styles/tailwind.css'
import { StageProvider } from '../context/StageContext'

export default function App({ Component, pageProps }) {
  return (
    <StageProvider>
      <Component {...pageProps} />
    </StageProvider>
  )
}
