import Banner from '../components/Banner';
import JobCard from '../components/JobCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, fetchJobs } from '../store/actionCreator';
import Loading from '../components/Loading';
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.job);
  const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    setLoading(true);

    let action = fetchJobs();

    if (!search.keyword || !search.companyId) {
      action = fetchJobs(search);
    }

    dispatch(action).finally(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCompanies()).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container pt-5">
        <div className="shadow py-2">
          <Banner />
        </div>
        <div className="row mt-5">
          <div className="mx-auto row">
            {jobs.map((job, i) => {
              return (
                <div className="col-3 mb-4" key={i}>
                  <JobCard job={job} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
