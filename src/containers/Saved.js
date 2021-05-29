import Content from '../components/Elements/Content'
import Layout from '../components/Elements/Layout'
import Sidebar from '../components/Elements/Sidebar'

import Jobs from '../components/Saved/Jobs'
import Profile from '../components/Saved/Profile'

export default function Saved() {
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
