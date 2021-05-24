import Content from '../components/Elements/Content';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import Subscribe from '../components/Home/Subscribe';

export default function Home() {
  return (
    <Layout flex>
      <Sidebar>
        <Subscribe />
      </Sidebar>
      <Content>Content</Content>
    </Layout>
  );
}
