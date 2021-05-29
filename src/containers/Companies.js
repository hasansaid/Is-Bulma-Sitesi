import Content from '../components/Elements/Content'
import Layout from '../components/Elements/Layout'
import Sidebar from '../components/Elements/Sidebar'

import List from '../components/Companies/List'
import Requests from '../components/Companies/Requests'

export default function Companies() {
  return (
    <Layout flex>
      <Sidebar>
        <Requests />
      </Sidebar>
      <Content>
        <List />
      </Content>
    </Layout>
  )
}
