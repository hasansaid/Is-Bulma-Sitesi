import Content from '../components/Elements/Content'
import Layout from '../components/Elements/Layout'
import Sidebar from '../components/Elements/Sidebar'

import Jobs from '../components/Applied/Jobs'
import Profile from '../components/Applied/Profile'

export default function Applied() {
  return (
    <Layout flex>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Content>
        <Jobs />
      </Content>
    </Layout>
  )
}
