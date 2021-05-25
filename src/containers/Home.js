import Content from '../components/Elements/Content';
import Filter from '../components/Home/Filter';
import Jobs from '../components/Home/Jobs';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import Subscribe from '../components/Home/Subscribe';

export default function Home() {
  return (
    <Layout flex>
      <Sidebar>
        <Subscribe />
        <Filter />
      </Sidebar>
      <Content>
        <Jobs />
      </Content>
    </Layout>
  );
}
