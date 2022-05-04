import React from 'react';
import { useParams } from 'react-router-dom';

export const Referral: React.VFC = () => {
  const { code } = useParams<{ code: string }>();
  console.warn(code);
  return <div style={{ textAlign: 'center', padding: 15 }}>Wait...</div>;
};
