import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import IndexPage from '../../components/index-page';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/`);
  }, []);

  return (
    <>
      <IndexPage />
    </>
  );
}
