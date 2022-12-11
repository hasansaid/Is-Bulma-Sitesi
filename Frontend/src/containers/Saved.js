import Content from '../components/Elements/Content';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';

import Jobs from '../components/Saved/Jobs';
import Profile from '../components/Saved/Profile';
import {useEffect} from 'react';

export default function Saved({userActive, changeUserActive}) {
  // useEffect (() => {
  //   document.getElementById ('basvurulanlarID').style.display = 'inline-block';
  //   document.getElementById ('kaydedilenlerID').style.display = 'inline-block';
  //   document.getElementById ('girisID').style.display = 'none';
  //   document.getElementById ('kayitID').style.display = 'none';
  // }, []);
  return (
    <Layout userActive={userActive} changeUserActive={changeUserActive} flex>
      {/* <Sidebar>
        <Profile />
      </Sidebar> */}
      <Content>
        <Jobs />
      </Content>
    </Layout>
  );
}
