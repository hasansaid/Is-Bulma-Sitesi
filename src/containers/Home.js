import Content from '../components/Elements/Content';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import Jobs from '../components/Home/Jobs';
import Subscribe from '../components/Home/Subscribe';

export default function Home() {
  return (
    <Layout flex>
      <Sidebar>
        <Subscribe />
      </Sidebar>
      <Content>
        <Jobs />
      </Content>
    </Layout>
  );
}
