import Content from '../components/Elements/Content';
import Filter from '../components/Home/Filter';
import Jobs from '../components/Home/Jobs/Jobs';
import Layout from '../components/Elements/Layout';
import Sidebar from '../components/Elements/Sidebar';
import Subscribe from '../components/Home/Subscriber';
import allJobs from '../constants/jobs.json';
import {useState} from 'react';
import ApplyModal from '../components/Home/ApplyModal';

export default function Home ({userActive, changeUserActive}) {
  const [jobs, setJobs] = useState (allJobs);

  const [appliedJob, setAppliedJob] = useState(allJobs[0])

  const changeJobs = jobs => {
    setJobs (jobs);
  };

  const changeAppliedJob = (job) => {
    setAppliedJob(job)
  }

  return (
    <>
    <ApplyModal appliedJob={appliedJob} />
      <Layout userActive={userActive} changeUserActive={changeUserActive} flex>
        <Sidebar>
          <Subscribe />
          <Filter  jobs={jobs} changeJobs={changeJobs} />
        </Sidebar>
        <Content>
          <Jobs changeAppliedJob={changeAppliedJob} jobs={jobs} changeJobs={changeJobs} />
        </Content>
      </Layout>
    </>
  );
}
