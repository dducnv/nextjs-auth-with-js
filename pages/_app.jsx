import '../styles/globals.css'
import { SWRConfig } from 'swr';
import axiosConfig from '../api-config/axiosConfig';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: url => axiosConfig.get(url), shouldRetryOnError: false }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
