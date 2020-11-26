import React, { useState, useEffect } from 'react';
import { VariantType, useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

interface iProjectProps {
  _id: string;
  projectName: string;
}

export default function Main(props: iProjectProps) {
  const [projectName, setProjectName] = React.useState(props.projectName);
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {});

  const handleSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <>
    </>
  );
}
