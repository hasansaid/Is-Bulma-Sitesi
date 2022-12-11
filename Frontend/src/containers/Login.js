import React from 'react';
import Content from '../components/Elements/Content';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import _Login from '../components/Login';

const Login = ({userActive, changeUserActive}) => {
  return (
    <div>
      <Layout userActive={userActive} flex>
        <Content>
          <_Login changeUserActive={changeUserActive} />
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
