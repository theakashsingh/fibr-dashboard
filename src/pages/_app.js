import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import { addLandingPage } from '../features/landingPages/landingPagesSlice';
import mockLandingPages from '../utils/mockData';
import './styles/globals.css';

// Hydrate the Redux store with mock data
mockLandingPages.forEach((page) => {
  store.dispatch(addLandingPage(page));
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        {/* <title>Landing Page Builder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

