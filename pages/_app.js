import Navbar from '@/components/Navbar';
import { ConfigProvider } from 'antd';
import '@/styles/globals.css';
import theme from '@/theme/theme.config';
import MainFooter from '@/components/Footer/MainFooter';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
      <MainFooter />
    </>
  );
}
