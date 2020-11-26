import React, { useState, useEffect } from 'react';
import IndexPage from '../components/index-page';

export default function Main() {
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);

  useEffect(() => {
  });

  return (
    <>
      <IndexPage />
    </>
  );
}
