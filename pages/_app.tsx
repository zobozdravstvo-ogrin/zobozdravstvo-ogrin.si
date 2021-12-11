import '../styles/style.scss';
import type { AppProps } from 'next/app';
import App from '../components/layout/App';
import DefaultMeta from '../components/layout/DefaultMeta';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultMeta />
      <App centered={false}>
        <Component {...pageProps} />
      </App>
    </>
  );
}

export default MyApp;
