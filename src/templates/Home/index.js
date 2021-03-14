import React from 'react';
import { useRouter } from 'next/router';
import * as s from './style';

const HomePage = () => {
  const router = useRouter();
  return (
    <s.HomePageContainer>
      <div>home</div>
    </s.HomePageContainer>
  );
};

export default HomePage;
