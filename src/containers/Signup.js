import React from 'react';

import Content from '../components/Elements/Content';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import _Signup from '../components/Signup';

const Signup = () => {
  return (
    <div>
      <Layout flex>
        <Content>
          <_Signup />
        </Content>
      </Layout>
    </div>
  );
};

export default Signup;
