import React, { useEffect } from 'react';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/themes';
import { nextWord } from 'helpers/index';
import { routes } from 'helpers/routes';
import 'nprogress/nprogress.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (Router.pathname === routes.home.path) {
      nextWord();
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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,600,700"
        />
        <title>Learning English</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Improve your english skills!" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextNprogress
          color={theme.primaryColor}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
