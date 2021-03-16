import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import GlobalStyle from 'custom/globalStyle';
import { theme } from 'custom/themes';
import WORDS from 'data/words';
import { routes } from 'helpers/routes';
import 'nprogress/nprogress.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-gallery/styles/css/image-gallery.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (Router.pathname === routes.home.path) {
      const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
      Router.push(`${routes.words.path}${randomWord}`);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {/* <meta name="keywords" content={keywords} /> */}
        <link rel="shortcut icon" href="/images/favicon.ico" />
        {/* <link rel="canonical" href="" /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,600,700"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
};
