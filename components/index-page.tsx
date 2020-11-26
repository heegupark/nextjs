import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Next.js skeleton</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="title" content="Next.js skeleton" />
        <meta name="description" content="Next.js skeleton" />
        <meta property="og:title" content="Next.js skeleton" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:description" content="Next.js skeleton" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="shortcut icon"
          type="image/png"
          href=""
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
          crossOrigin="anonymous"
        />
      </Head>
    </>
  );
}
