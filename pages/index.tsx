import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';

import FormComponent from '@/components/FormComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>test-project</title>
        <meta name="description" content="Описание страницы для SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <FormComponent />
      </Box>
    </>
  );
}
