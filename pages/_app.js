import 'normalize.css'
import '../scss/main.scss'
import { ProviderMessage } from '../components/context/contextMessage'

function MyApp({ Component, pageProps }) {

  return (
    <ProviderMessage>
      <Component {...pageProps} />
    </ProviderMessage>
  )
}

export default MyApp
