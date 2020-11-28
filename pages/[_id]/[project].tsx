import React from 'react';
import IndexPage from '../../components/index-page';
import { SnackbarProvider } from 'notistack';

export default function Index() {
  return (
    <SnackbarProvider maxSnack={3}>
      <IndexPage />
    </SnackbarProvider>
  );
}
