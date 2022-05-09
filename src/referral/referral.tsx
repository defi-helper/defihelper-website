import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUserReferrerQuery } from 'src/graphql/_generated-hooks';
import Cookies from 'js-cookie';

export const Referral: React.VFC = () => {
  const { code } = useParams<{ code: string }>();
  const [{ data, fetching }] = useUserReferrerQuery({
    variables: {
      code
    }
  });

  useEffect(() => {
    if (fetching) return;

    if (!data) {
      window.location.href = 'https://app.defihelper.io';
      return;
    }

    Cookies.set('dfh-parent-code', data.userReferrer.id, {
      expires: 1000 * 60 * 60 * 24 * 365, // 1 year
      domain: 'defihelper.io'
    });
    window.location.href = data.userReferrer.redirectTo;
  }, [data, fetching]);

  return <div style={{ textAlign: 'center', padding: 15 }}>Wait...</div>;
};
