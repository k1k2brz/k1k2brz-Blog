import AppLayout from '@components/AppLayout';
import Mainpage from '@components/mainpage/mainpage';
import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const Home = () => {
  return (
    <RecoilRoot>
      <AppLayout>
        <Mainpage />
      </AppLayout>
    </RecoilRoot>
  );
};

export default Home;
