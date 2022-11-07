import Content from '../components/Elements/Content';
import Filter from '../components/Home/Filter';
import Jobs from '../components/Home/Jobs/Jobs';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import Subscribe from '../components/Home/Subscriber';
import allJobs from '../constants/jobs.json';
import {useState} from 'react';

export default function Home () {
  const [jobs, setJobs] = useState (allJobs);

  const changeJobs = jobs => {
    setJobs (jobs);
  };

  return (
    <Layout flex>
      <Sidebar>
        <Subscribe />
        <Filter jobs={jobs} changeJobs={changeJobs} />
      </Sidebar>
      <Content>
        <Jobs jobs={jobs} changeJobs={changeJobs} />
      </Content>
    </Layout>
  );
}
