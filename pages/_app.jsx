import '../styles/globals.css';

import { ThemeProvider } from '@emotion/react';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import * as Sentry from '@sentry/react';
import { CssBaseline } from '@mui/material';

import i18n from '../i18n';
import 'dotenv/config';
import theme from '../src/theme/theme.ts';

Sentry.init({
  dsn: process.env.SENTRY_DSN_KEY,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracePropagationTargets: [process.env.LOCALHOST, /^https:\/\/yourserver\.io\/api/],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component pageProps={pageProps} /> {/* передаем пропсы явно */}
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
